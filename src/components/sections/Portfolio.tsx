import { useState } from "react"
import { ExternalLink } from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { GithubIcon } from "@/components/SocialIcons"

type Cat = "All" | "Web App" | "AI" | "Tools" | "Game"

type Project = {
  title: string
  category: Exclude<Cat, "All">
  desc: string
  stack: string[]
  gradient: string
  img: string
  live?: string
  code?: string
}

const projects: Project[] = [
  {
    title: "VectorSheets",
    category: "Web App",
    desc: "An advanced version of Excel with formulas, charts, and collaborative editing — built for power users.",
    stack: ["React", "TypeScript", "Canvas", "Zustand"],
    gradient: "from-emerald-500/40 via-teal-500/20 to-transparent",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=85&auto=format&fit=crop",
    live: "https://vectorsheets.vercel.app/",
  },
  {
    title: "CodeTrackr",
    category: "Web App",
    desc: "Unified dashboard that tracks a coder's performance across LeetCode, Codeforces, GFG, and HackerRank.",
    stack: ["Next.js", "Node", "MongoDB", "Chart.js"],
    gradient: "from-orange-500/40 via-amber-500/20 to-transparent",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=85&auto=format&fit=crop",
    live: "https://codetrackr-app.vercel.app/",
  },
  {
    title: "Jarvis",
    category: "AI",
    desc: "A voice-controlled personal assistant that opens apps, answers queries, and automates daily tasks.",
    stack: ["Python", "OpenAI", "SpeechRecognition"],
    gradient: "from-indigo-500/40 via-sky-500/20 to-transparent",
    img: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=900&q=85&auto=format&fit=crop",
  },
  {
    title: "Favicon Generator",
    category: "Tools",
    desc: "Upload an image and instantly generate multi-size favicons + manifest files for web & PWA apps.",
    stack: ["React", "Canvas API", "TailwindCSS"],
    gradient: "from-pink-500/40 via-rose-500/20 to-transparent",
    img: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=900&q=85&auto=format&fit=crop",
    live: "https://favicon-gen-seven.vercel.app/",
  },
  {
    title: "Resume Creator",
    category: "Tools",
    desc: "Drag-and-drop resume builder with live preview, ATS-friendly templates, and one-click PDF export.",
    stack: ["React", "jsPDF", "Tailwind", "DnD-kit"],
    gradient: "from-violet-500/40 via-fuchsia-500/20 to-transparent",
    img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=900&q=85&auto=format&fit=crop",
    live: "https://theresumecompany.vercel.app/",
  },
  {
    title: "Magic Tiles",
    category: "Game",
    desc: "A fast-paced rhythm game — tap falling tiles in sync with the music. Built from scratch with vanilla JS.",
    stack: ["JavaScript", "HTML5 Audio", "CSS3"],
    gradient: "from-purple-500/40 via-blue-500/20 to-transparent",
    img: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=900&q=85&auto=format&fit=crop",
    live: "https://magic-tiles-xi.vercel.app/",
  },
]

const cats: Cat[] = ["All", "Web App", "AI", "Tools", "Game"]

export function Portfolio() {
  const [active, setActive] = useState<Cat>("All")
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="section-pad">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Portfolio</p>
          <h2 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">Selected Work</h2>
          <p className="mt-4 text-brand-muted">
            A snapshot of the projects I'm most proud of — from productivity tools to games and AI assistants.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                active === c
                  ? "bg-brand-orange text-white shadow-[0_10px_30px_-10px_rgba(255,92,40,0.6)]"
                  : "border border-brand-border text-brand-muted hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-border bg-brand-surface transition-all duration-500 hover:-translate-y-2 hover:border-brand-orange/50 hover:shadow-[0_20px_50px_-20px_rgba(255,92,40,0.4)]">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} mix-blend-overlay`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-brand-surface/20 to-transparent" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
                  <div className="absolute top-3 right-3 rounded-full border border-white/15 bg-black/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/90 backdrop-blur">
                    {p.category}
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                    <h3 className="font-display text-lg font-bold text-white drop-shadow-lg">
                      {p.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="text-sm leading-relaxed text-brand-muted">{p.desc}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-brand-border bg-brand-bg/60 px-2 py-0.5 text-[10px] font-medium text-brand-muted"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-2 pt-4">
                    {p.live ? (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-brand-orange px-3 py-1.5 text-xs font-semibold text-white transition-all hover:-translate-y-0.5"
                      >
                        <ExternalLink size={12} /> Live
                      </a>
                    ) : (
                      <span
                        title="Live demo coming soon"
                        className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-full border border-brand-border bg-brand-bg/50 px-3 py-1.5 text-xs font-medium text-brand-muted"
                      >
                        Coming soon
                      </span>
                    )}
                    <a
                      href={p.code || "https://github.com/SouravBhati01"}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-brand-border px-3 py-1.5 text-xs font-medium text-brand-muted transition-all hover:-translate-y-0.5 hover:border-brand-orange hover:text-white"
                    >
                      <GithubIcon size={12} /> Code
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
