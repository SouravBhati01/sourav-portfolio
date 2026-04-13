import { CircularProgress } from "@/components/CircularProgress"
import { Reveal } from "@/components/Reveal"

const skills = [
  { label: "React", value: 85 },
  { label: "DSA", value: 80 },
  { label: "Node.js", value: 75 },
  { label: "SQL", value: 70 },
  { label: "Docker", value: 65 },
]

export function Skills() {
  return (
    <section className="py-12 md:py-16">
      <div className="container-x">
        <div className="grid grid-cols-2 items-center justify-items-center gap-8 sm:grid-cols-3 md:grid-cols-5">
          {skills.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <CircularProgress label={s.label} value={s.value} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
