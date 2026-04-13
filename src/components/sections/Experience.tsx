import { Briefcase, GraduationCap, Rocket } from "lucide-react"
import { Reveal } from "@/components/Reveal"

type Item = {
  Icon: React.ElementType
  tag: "Education" | "Work" | "Project"
  title: string
  where: string
  period: string
  desc: string
}

const timeline: Item[] = [
  {
    Icon: GraduationCap,
    tag: "Education",
    title: "B.Tech in Computer Science",
    where: "Engineering College · India",
    period: "2024 — Present",
    desc: "Currently in 2nd year. Focused on data structures, algorithms, web development, and system design. Consistently in the top of class cohort.",
  },
  {
    Icon: Rocket,
    tag: "Project",
    title: "Shipping real-world products",
    where: "Solo + Collaborations",
    period: "2024 — Present",
    desc: "Designed and shipped VectorSheets, CodeTrackr, Jarvis, Favicon Generator, Resume Creator, and Magic Tiles — from idea to deployed production.",
  },
  {
    Icon: Briefcase,
    tag: "Work",
    title: "Freelance Full-Stack Developer",
    where: "Remote · Freelance",
    period: "2025 — Present",
    desc: "Built 5+ websites and web apps for clients — landing pages, dashboards, and small SaaS tools using React, Node.js, and Tailwind.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Journey</p>
          <h2 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">
            Experience & Education
          </h2>
          <p className="mt-4 text-brand-muted">
            Where I've been learning, shipping, and growing.
          </p>
        </div>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-brand-border to-transparent md:left-1/2 md:block"
          />

          <ol className="space-y-6 md:space-y-12">
            {timeline.map((it, i) => (
              <Reveal key={it.title} delay={i * 80}>
                <li
                  className={`relative grid gap-4 md:grid-cols-2 md:gap-10 ${
                    i % 2 === 1 ? "md:[&>*:first-child]:col-start-2" : ""
                  }`}
                >
                  <div
                    className={`group card-surface relative p-6 transition-all hover:-translate-y-1 hover:border-brand-orange/50 ${
                      i % 2 === 1 ? "md:text-left" : "md:text-left"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-orange/10 text-brand-orange transition-all group-hover:rotate-6 group-hover:scale-110">
                        <it.Icon size={18} />
                      </div>
                      <span className="chip !text-brand-orange !border-brand-orange/40 !bg-brand-orange/10">
                        {it.tag}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">{it.title}</h3>
                    <div className="mt-1 text-sm text-brand-muted">{it.where}</div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-brand-orange">
                      {it.period}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-brand-muted">{it.desc}</p>
                  </div>
                  <div
                    aria-hidden
                    className="absolute left-4 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-brand-bg bg-brand-orange shadow-[0_0_0_3px_rgba(255,92,40,0.2)] md:left-1/2 md:block"
                  />
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
