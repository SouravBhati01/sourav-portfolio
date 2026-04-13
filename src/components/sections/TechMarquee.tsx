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
  const loop = [...techs, ...techs]
  return (
    <section
      aria-label="Tech stack"
      className="relative overflow-hidden border-y border-brand-border bg-brand-bg/60 py-5 sm:py-7 md:py-8"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-brand-bg to-transparent sm:w-20 md:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-brand-bg to-transparent sm:w-20 md:w-24" />
      <div
        className="flex gap-5 whitespace-nowrap sm:gap-8 md:gap-10"
        style={{ animation: "marquee 40s linear infinite" }}
      >
        {loop.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="inline-flex shrink-0 items-center gap-2 font-display text-sm font-bold text-brand-muted sm:gap-3 sm:text-lg md:text-2xl lg:text-3xl"
          >
            {t}
            <span className="text-brand-orange">✦</span>
          </span>
        ))}
      </div>
    </section>
  )
}
