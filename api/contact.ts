// Vercel serverless function. Accepts POST { firstName, lastName, email,
// phone, message } and relays the message to souravrajput1034@gmail.com.
//
// Delivery priority:
//   1. RESEND_API_KEY  -> api.resend.com (primary, recommended)
//   2. SMTP via Brevo  -> api.brevo.com (fallback, uses BREVO_API_KEY)
//   3. No credentials  -> forwards to FormSubmit.co (needs one-time
//      activation click in the recipient inbox)

export const config = { runtime: "edge" }

const TO = "souravrajput1034@gmail.com"
const FROM = "Portfolio <onboarding@resend.dev>"

type Body = {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  message?: string
}

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json" },
  })

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405)

  let body: Body
  try {
    body = (await req.json()) as Body
  } catch {
    return json({ error: "Invalid JSON" }, 400)
  }

  const { firstName = "", lastName = "", email = "", phone = "", message = "" } = body
  if (!email || !message) return json({ error: "Missing email or message" }, 400)

  const fullName = `${firstName} ${lastName}`.trim() || "Anonymous"
  const subject = `Portfolio contact · ${fullName}`
  const text = [
    `From: ${fullName} <${email}>`,
    phone ? `Phone: ${phone}` : null,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n")

  const html = `
    <div style="font-family:-apple-system,Segoe UI,sans-serif;background:#0B0B10;color:#fff;padding:32px;border-radius:16px;max-width:560px;margin:auto">
      <div style="color:#FF5C28;font-size:12px;letter-spacing:3px;font-weight:700">NEW PORTFOLIO MESSAGE</div>
      <h1 style="margin:8px 0 24px;font-size:22px;color:#fff">${escapeHtml(fullName)}</h1>
      <table style="width:100%;font-size:14px;line-height:1.6;color:#8A8A99">
        <tr><td style="padding:6px 0;width:80px">Email</td><td style="color:#fff"><a href="mailto:${escapeHtml(email)}" style="color:#FF5C28;text-decoration:none">${escapeHtml(email)}</a></td></tr>
        ${phone ? `<tr><td style="padding:6px 0">Phone</td><td style="color:#fff">${escapeHtml(phone)}</td></tr>` : ""}
      </table>
      <div style="margin-top:20px;padding:16px;border:1px solid #23232F;border-radius:12px;background:#15151D;white-space:pre-wrap;color:#fff;font-size:14px;line-height:1.6">${escapeHtml(message)}</div>
      <div style="margin-top:24px;font-size:12px;color:#8A8A99">Sent from sourav-portfolio-coral.vercel.app</div>
    </div>`

  // 1. Resend
  const resendKey = (globalThis as unknown as { process?: { env?: Record<string, string> } }).process?.env?.RESEND_API_KEY
  if (resendKey) {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: TO,
        reply_to: email,
        subject,
        text,
        html,
      }),
    })
    if (r.ok) return json({ success: true, via: "resend" })
    const err = await r.text()
    return json({ error: `Resend: ${err}` }, 502)
  }

  // 2. Brevo (free 300/day, simple HTTP API)
  const brevoKey = (globalThis as unknown as { process?: { env?: Record<string, string> } }).process?.env?.BREVO_API_KEY
  if (brevoKey) {
    const r = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: { "api-key": brevoKey, "content-type": "application/json" },
      body: JSON.stringify({
        sender: { name: "Portfolio", email: TO },
        to: [{ email: TO, name: "Sourav" }],
        replyTo: { email, name: fullName },
        subject,
        htmlContent: html,
        textContent: text,
      }),
    })
    if (r.ok) return json({ success: true, via: "brevo" })
    const err = await r.text()
    return json({ error: `Brevo: ${err}` }, 502)
  }

  // 3. Final fallback: FormSubmit (needs one-time activation)
  const r = await fetch(`https://formsubmit.co/ajax/${TO}`, {
    method: "POST",
    headers: { "content-type": "application/json", accept: "application/json" },
    body: JSON.stringify({
      name: fullName,
      email,
      phone,
      message,
      _subject: subject,
      _template: "table",
      _captcha: "false",
    }),
  })
  if (r.ok) {
    const data = (await r.json()) as { success?: string | boolean }
    if (data.success === "true" || data.success === true) {
      return json({ success: true, via: "formsubmit" })
    }
  }
  return json(
    {
      error:
        "No email provider configured. Add RESEND_API_KEY (recommended) or BREVO_API_KEY to Vercel env vars.",
    },
    500,
  )
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}
