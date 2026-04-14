import { useState } from "react"
import { Mail, MapPin, Phone, Send, ExternalLink, CheckCircle2, AlertCircle } from "lucide-react"
import { profile, socials } from "@/lib/profile"

// Uses /api/contact — a Vercel serverless function that delivers via
// Resend / Brevo / FormSubmit depending on what env var is configured.
const CONTACT_ENDPOINT = "/api/contact"

type Status = "idle" | "sending" | "success" | "error"

export function Contact() {
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const firstName = String(fd.get("firstName") || "")
    const lastName = String(fd.get("lastName") || "")
    const email = String(fd.get("email") || "")
    const phone = String(fd.get("phone") || "")
    const message = String(fd.get("message") || "")

    setStatus("sending")
    setErrorMsg("")

    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, phone, message }),
      })

      const data = (await res.json().catch(() => ({}))) as {
        success?: boolean
        error?: string
      }

      if (res.ok && data.success) {
        setStatus("success")
        form.reset()
        setTimeout(() => setStatus("idle"), 6000)
        return
      }
      throw new Error(data.error || `HTTP ${res.status}`)
    } catch (err) {
      setStatus("error")
      setErrorMsg(
        err instanceof Error
          ? `Couldn't send: ${err.message}`
          : "Couldn't send right now. Please try again shortly.",
      )
      setTimeout(() => setStatus("idle"), 8000)
    }
  }

  return (
    <section id="contact" className="section-pad">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">Contact me</h2>
          <p className="mt-4 text-brand-muted">
            Have a project in mind or just want to say hi? Drop a message — it lands straight in my inbox, and I usually reply within 24 hours.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <form onSubmit={onSubmit} className="card-surface p-6 md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field name="firstName" placeholder="First Name" />
              <Field name="lastName" placeholder="Last Name" />
              <Field name="email" type="email" placeholder="Email Address" />
              <Field name="phone" placeholder="Phone Number" />
            </div>
            <textarea
              name="message"
              placeholder="Tell me about your project, idea, or just say hi…"
              rows={6}
              required
              className="mt-4 w-full rounded-xl border border-brand-border bg-brand-bg/60 px-4 py-3 text-sm text-white placeholder:text-brand-muted focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
            />

            {status === "success" && (
              <div className="mt-4 flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold">Message sent ✓</div>
                  <div className="text-emerald-300/80">
                    Thanks for reaching out — I'll get back to you within 24 hours.
                  </div>
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="mt-4 flex items-start gap-3 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">
                <AlertCircle size={18} className="mt-0.5 shrink-0" />
                <div>{errorMsg}</div>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-orange mt-5 w-full justify-center py-3 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "sending" ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>

            <p className="mt-3 text-center text-[11px] text-brand-muted">
              Delivered straight to <span className="text-white">{profile.email}</span>
            </p>
          </form>

          <div className="flex flex-col gap-4">
            <div className="card-surface p-6">
              <ul className="space-y-5">
                <InfoRow
                  Icon={Phone}
                  label="Phone"
                  value={profile.phone}
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                />
                <InfoRow
                  Icon={Mail}
                  label="Email"
                  value={profile.email}
                  href={`mailto:${profile.email}`}
                />
                <InfoRow Icon={MapPin} label="Address" value={profile.location} />
              </ul>
              <div className="mt-6 border-t border-brand-border pt-5">
                <div className="mb-3 text-xs uppercase tracking-wider text-brand-muted">
                  Find me on
                </div>
                <div className="flex flex-wrap gap-2">
                  {socials.map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      title={label}
                      className="group flex items-center gap-2 rounded-full border border-brand-border bg-brand-bg/60 px-3 py-1.5 text-xs text-brand-muted transition-all hover:-translate-y-0.5 hover:border-brand-orange hover:text-white"
                    >
                      <Icon size={12} className="transition-colors group-hover:text-brand-orange" />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="card-surface relative overflow-hidden p-3">
              <a
                href="https://maps.google.com/?q=Mohali,Chandigarh,India"
                target="_blank"
                rel="noreferrer"
                className="absolute left-5 top-5 z-20 inline-flex items-center gap-1.5 rounded-full bg-brand-bg/80 px-3 py-1.5 text-xs font-medium text-white backdrop-blur"
              >
                Open in Maps <ExternalLink size={12} />
              </a>
              <div className="relative h-64 overflow-hidden rounded-xl">
                <iframe
                  title="Map"
                  src="https://maps.google.com/maps?q=Mohali,Chandigarh,India&t=&z=11&ie=UTF8&iwloc=&output=embed"
                  className="h-full w-full border-0 grayscale contrast-125"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  name,
  placeholder,
  type = "text",
}: {
  name: string
  placeholder: string
  type?: string
}) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      required
      className="w-full rounded-xl border border-brand-border bg-brand-bg/60 px-4 py-3 text-sm text-white placeholder:text-brand-muted focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
    />
  )
}

function InfoRow({
  Icon,
  label,
  value,
  href,
}: {
  Icon: React.ElementType
  label: string
  value: string
  href?: string
}) {
  const content = (
    <>
      <div className="grid h-11 w-11 place-items-center rounded-full bg-brand-orange/10 text-brand-orange transition-all group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white">
        <Icon size={18} />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-brand-muted">{label}</div>
        <div className="mt-1 text-sm font-medium text-white transition-colors group-hover:text-brand-orange">
          {value}
        </div>
      </div>
    </>
  )
  return (
    <li>
      {href ? (
        <a href={href} className="group flex items-start gap-4">
          {content}
        </a>
      ) : (
        <div className="group flex items-start gap-4">{content}</div>
      )}
    </li>
  )
}
