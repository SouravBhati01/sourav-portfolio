import { ArrowUp, Mail, MapPin, Phone } from "lucide-react"
import { profile, socials } from "@/lib/profile"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
]

const services = [
  "Frontend Development",
  "Backend Development",
  "Database Management",
  "DevOps & Deployment",
  "DSA & Problem Solving",
]

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-brand-border bg-brand-bg/60">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-orange/60 to-transparent" />

      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr_1.1fr] md:gap-8">
        <div>
          <a href="#home" className="font-display text-2xl font-extrabold text-white">
            Sou<span className="text-brand-orange">rav</span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-muted">
            Full-stack developer crafting modern web experiences. Open to freelance and
            internship opportunities.
          </p>
          <div className="mt-5 flex items-center gap-2">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                className="group relative grid h-9 w-9 place-items-center overflow-hidden rounded-full border border-brand-border text-brand-muted transition-all hover:-translate-y-1 hover:border-brand-orange hover:text-white"
              >
                <span className="absolute inset-0 scale-0 rounded-full bg-brand-orange transition-transform duration-300 group-hover:scale-100" />
                <Icon size={14} className="relative z-10" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h4>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-brand-muted transition-colors hover:text-brand-orange"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
          <ul className="mt-5 space-y-3">
            {services.map((s) => (
              <li key={s}>
                <a
                  href="#services"
                  className="text-sm text-brand-muted transition-colors hover:text-brand-orange"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Get in touch</h4>
          <ul className="mt-5 space-y-3.5 text-sm">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-start gap-3 text-brand-muted transition-colors hover:text-brand-orange"
              >
                <Mail size={16} className="mt-0.5 shrink-0 text-brand-orange" />
                <span className="break-all">{profile.email}</span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-brand-muted transition-colors hover:text-brand-orange"
              >
                <Phone size={16} className="shrink-0 text-brand-orange" />
                <span>{profile.phone}</span>
              </a>
            </li>
            <li className="flex items-start gap-3 text-brand-muted">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand-orange" />
              <span>{profile.location}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-border">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-xs text-brand-muted md:flex-row">
          <div>© {new Date().getFullYear()} Sourav Rajput. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <a href="#home" className="transition-colors hover:text-brand-orange">Privacy</a>
            <a href="#home" className="transition-colors hover:text-brand-orange">Terms</a>
            <a
              href="#home"
              aria-label="Back to top"
              className="inline-flex items-center gap-1.5 rounded-full border border-brand-border px-3 py-1 text-brand-muted transition-all hover:border-brand-orange hover:text-brand-orange"
            >
              Back to top <ArrowUp size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
