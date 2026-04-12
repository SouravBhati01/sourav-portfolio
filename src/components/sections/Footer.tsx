import { ArrowUp } from "lucide-react"
import { socials } from "@/lib/profile"

export function Footer() {
  return (
    <footer className="relative border-t border-brand-border py-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-orange/60 to-transparent" />
      <div className="container-x flex flex-col items-center justify-between gap-4 md:flex-row">
        <a href="#home" className="font-display text-xl font-extrabold text-white">
          Sou<span className="text-brand-orange">rav</span>
        </a>
        <div className="text-sm text-brand-muted">
          © {new Date().getFullYear()} Sourav. Crafted with <span className="text-brand-orange">♥</span> and lots of coffee.
        </div>
        <div className="flex items-center gap-2">
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
          <a
            href="#home"
            aria-label="Back to top"
            className="ml-2 grid h-9 w-9 place-items-center rounded-full border border-brand-border text-brand-muted transition-all hover:-translate-y-1 hover:border-brand-orange hover:text-brand-orange"
          >
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}
