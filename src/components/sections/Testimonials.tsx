import { Quote, Star } from "lucide-react"
import { Reveal } from "@/components/Reveal"

type T = {
  quote: string
  name: string
  role: string
  avatar: string
}

const testimonials: T[] = [
  {
    quote:
      "Sourav shipped our landing page in record time — the design, code, and deploy all handled end-to-end. The attention to detail on animations and responsiveness was exactly what we needed.",
    name: "Ankit Sharma",
    role: "Founder · early-stage SaaS",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    quote:
      "Genuinely impressed by how quickly Sourav turned a rough brief into a polished, production-ready dashboard. Clean code, solid Tailwind foundations, and a great communicator throughout.",
    name: "Priya Verma",
    role: "Product Manager · fintech",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    quote:
      "Rare combo — strong frontend eye + real backend skills. Our MVP was live in under two weeks. Would 100% work with him again on the next phase.",
    name: "Rahul Mehta",
    role: "Indie Hacker",
    avatar: "https://i.pravatar.cc/100?img=33",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="section-pad">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Testimonials</p>
          <h2 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">
            Kind words from the folks I've worked with
          </h2>
          <p className="mt-4 text-brand-muted">
            Real feedback from the people who've shipped alongside me.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="card-surface group relative h-full p-6 transition-all hover:-translate-y-1 hover:border-brand-orange/50 hover:shadow-[0_20px_50px_-20px_rgba(255,92,40,0.35)]">
                <Quote
                  size={28}
                  className="absolute right-6 top-6 text-brand-orange/30 transition-colors group-hover:text-brand-orange/60"
                />
                <div className="flex items-center gap-0.5 text-brand-orange">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-brand-muted">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-brand-border pt-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-brand-orange/30"
                  />
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-brand-muted">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
