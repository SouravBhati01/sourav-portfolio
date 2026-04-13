import { Download, ArrowRight, Sparkles, Code2 } from "lucide-react"
import { Typewriter } from "@/components/Typewriter"
import { socials } from "@/lib/profile"

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex w-full flex-col overflow-hidden pt-24 md:min-h-screen md:pt-20"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[18%] top-[35%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-brand-orange/20 blur-[100px]" />
        <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-indigo-500/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 lg:block"
      >
        <div className="flex flex-col items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.4em] text-brand-muted [writing-mode:vertical-rl]">
          <span>· Full-Stack Dev ·</span>
          <span className="text-brand-orange">Available for Work</span>
          <span>· Based in India ·</span>
        </div>
      </div>

      <div className="container-x flex flex-1 items-center py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="grid w-full grid-cols-1 items-center gap-10 sm:gap-12 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] md:gap-16 lg:gap-24">
          <div className="relative order-1 mx-auto w-full md:mx-0">
            <div
              className="relative mx-auto aspect-square w-[290px] sm:w-[360px] md:w-full md:max-w-[440px] animate-scale-in"
              style={{ animationDelay: "0.15s" }}
            >
              <div className="absolute inset-0 rounded-full border border-brand-border/60" />
              <div className="absolute inset-[10px] rounded-full border border-brand-border/50 sm:inset-[14px]" />
              <div className="absolute inset-[20px] rounded-full border border-brand-border/30 sm:inset-[28px]" />

              <div
                className="absolute -inset-3 rounded-full opacity-75 [will-change:transform]"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, rgba(255,92,40,0.65) 60deg, transparent 130deg, transparent 360deg)",
                  animation: "spin 10s linear infinite",
                  maskImage: "radial-gradient(circle, transparent 59%, black 61%)",
                  WebkitMaskImage: "radial-gradient(circle, transparent 59%, black 61%)",
                }}
              />

              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,92,40,0.3),transparent_60%)] blur-xl" />

              <div className="group absolute inset-[28px] overflow-hidden rounded-full ring-1 ring-white/5 shadow-[0_20px_60px_-20px_rgba(255,92,40,0.35)] sm:inset-[36px] md:inset-[44px]">
                <img
                  src="/sourav_photo.jpg"
                  alt="Sourav Rajput"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(11,11,16,0.85)_100%)]" />
              </div>

              <div
                className="absolute left-0 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-brand-orange/60 bg-brand-bg/95 shadow-[0_0_40px_rgba(255,92,40,0.5)] backdrop-blur animate-float sm:-left-3 sm:h-14 sm:w-14 md:-left-5 md:h-16 md:w-16"
                style={{ animationDelay: "0.2s" }}
              >
                <span className="text-lg sm:text-xl md:text-2xl">👋</span>
              </div>

              <div
                className="absolute right-0 top-4 flex items-center gap-1.5 rounded-full border border-brand-border bg-brand-surface/95 px-2.5 py-1 text-[10px] font-medium text-white shadow-xl backdrop-blur animate-float sm:-right-2 sm:top-10 sm:px-3 sm:py-1.5 sm:text-[11px]"
                style={{ animationDelay: "1.2s" }}
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                Online
              </div>

              <div
                className="absolute bottom-4 right-0 rounded-2xl border border-brand-border bg-brand-surface/95 px-3 py-2 text-[10px] shadow-xl backdrop-blur animate-float sm:-right-3 sm:bottom-6 sm:text-[11px]"
                style={{ animationDelay: "2.2s" }}
              >
                <div className="flex items-center gap-2 text-white">
                  <Code2 size={12} className="text-brand-orange" />
                  <span className="font-semibold">1,240+</span>
                  <span className="text-brand-muted">commits</span>
                </div>
              </div>

              <div
                className="absolute -bottom-2 left-2 rounded-full border border-brand-border bg-brand-surface/95 px-2.5 py-1 text-[10px] font-medium text-brand-orange shadow-xl backdrop-blur animate-float sm:left-6 sm:px-3 sm:py-1.5 sm:text-[11px]"
                style={{ animationDelay: "1.8s" }}
              >
                ⚡ LeetCode · Knight
              </div>
            </div>
          </div>

          <div className="relative order-2">
            <span
              className="chip mb-6 animate-fade-up"
              style={{ animationDelay: "0s" }}
            >
              <Sparkles size={12} className="text-brand-orange" />
              <span className="text-white/90">Hello, I'm Sourav Rajput</span>
            </span>

            <h1 className="font-display text-[clamp(2rem,5.5vw,4.5rem)] font-extrabold leading-[1.08] tracking-tight text-white [contain:layout]">
              <span
                className="block animate-fade-up"
                style={{ animationDelay: "0.1s" }}
              >
                Full-stack
              </span>
              <span
                className="block animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                developer crafting
              </span>
              <span
                className="mt-1 block text-[clamp(1.75rem,4.5vw,3.5rem)] leading-[1.1] animate-fade-up"
                style={{ animationDelay: "0.3s" }}
              >
                <Typewriter
                  className="bg-gradient-to-r from-brand-orange via-amber-400 to-brand-orange bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,92,40,0.25)]"
                  words={["modern web apps", "AI tools", "fun experiences", "clean code"]}
                />
              </span>
            </h1>

            <p
              className="mt-6 max-w-xl text-[15px] leading-relaxed text-brand-muted animate-fade-up md:text-base lg:text-lg"
              style={{ animationDelay: "0.45s" }}
            >
              I design, build, and ship full-stack products — from pixel-perfect interfaces to
              scalable APIs. Currently open to freelance and internship opportunities.
            </p>

            <div
              className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up"
              style={{ animationDelay: "0.55s" }}
            >
              <a
                href="#contact"
                className="btn-orange group !rounded-full !px-5 !py-3 sm:!px-6"
              >
                Happy to chat — message
                <span className="grid h-7 w-7 place-items-center rounded-full bg-white/20 transition-transform group-hover:translate-x-1">
                  <ArrowRight size={14} />
                </span>
              </a>
              <a
                href="/MY_RESUME.pdf"
                download="Sourav_Rajput_Resume.pdf"
                className="btn-ghost group !rounded-full"
              >
                <Download
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5"
                />
                Download CV
              </a>
            </div>

            <div
              className="mt-10 flex flex-wrap items-center gap-4 border-t border-brand-border pt-6 sm:gap-6 animate-fade-up"
              style={{ animationDelay: "0.7s" }}
            >
              <span className="text-[10px] uppercase tracking-[0.25em] text-brand-muted sm:text-xs">
                Find me on
              </span>
              <div className="flex items-center gap-2">
                {socials.map(({ Icon, href, label }, i) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    title={label}
                    className="group relative grid h-9 w-9 place-items-center overflow-hidden rounded-full border border-brand-border text-brand-muted transition-all hover:-translate-y-1 hover:border-brand-orange hover:text-white animate-fade-up"
                    style={{ animationDelay: `${0.8 + i * 0.05}s` }}
                  >
                    <span className="absolute inset-0 scale-0 rounded-full bg-brand-orange transition-transform duration-300 group-hover:scale-100" />
                    <Icon size={14} className="relative z-10" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative border-t border-brand-border bg-brand-bg/60 backdrop-blur animate-fade-up"
        style={{ animationDelay: "0.9s" }}
      >
        <div className="container-x grid grid-cols-3 gap-3 py-6 sm:gap-6 sm:py-8 md:py-10">
          {[
            { num: "3+", label: "Years Experience" },
            { num: "20+", label: "Projects Shipped" },
            { num: "5+", label: "Happy Clients" },
          ].map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-start gap-0.5 sm:flex-row sm:items-baseline sm:gap-4"
            >
              <div className="bg-gradient-to-br from-white to-brand-orange bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
                {s.num}
              </div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-brand-muted sm:text-xs">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-brand-muted md:flex"
      >
        <span>Scroll</span>
        <span className="relative flex h-8 w-5 justify-center rounded-full border border-brand-border">
          <span
            className="absolute top-1.5 h-1.5 w-1 rounded-full bg-brand-orange"
            style={{ animation: "float 1.6s ease-in-out infinite" }}
          />
        </span>
      </div>
    </section>
  )
}
