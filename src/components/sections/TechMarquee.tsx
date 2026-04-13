const techs = [
  "React",
  "TypeScript",
  "Node.js",
  "Next.js",
  "Tailwind CSS",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "Git",
  "Python",
  "REST APIs",
  "Vite",
  "Linux",
  "HTML5",
  "CSS3",
]

export function TechMarquee() {
  const loop = [...techs, ...techs, ...techs]
  return (
    <section
      aria-label="Tech stack"
      className="relative w-full max-w-full overflow-hidden border-y border-brand-border bg-brand-bg/60 py-4 sm:py-6"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-brand-bg to-transparent sm:w-16 md:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-brand-bg to-transparent sm:w-16 md:w-24" />
      <div
        className="flex w-max flex-nowrap gap-4 whitespace-nowrap sm:gap-6 md:gap-8"
        style={{ animation: "marquee 35s linear infinite" }}
      >
        {loop.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="inline-flex shrink-0 items-center gap-2 font-display text-xs font-semibold uppercase tracking-wider text-brand-muted sm:text-sm md:text-base lg:text-lg"
          >
            {t}
            <span className="text-brand-orange">✦</span>
          </span>
        ))}
      </div>
    </section>
  )
}
