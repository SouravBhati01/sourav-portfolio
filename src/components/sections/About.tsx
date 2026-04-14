import { ArrowRight } from "lucide-react"

const stack = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Express",
  "HTML5",
  "CSS3",
  "Tailwind",
  "PostgreSQL",
  "Docker",
  "Git",
  "GitHub",
  "REST APIs",
  "Data Structures",
  "Algorithms",
  "Linux",
  "MongoDB",
  "Python",
]

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">About</p>
          <h2 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">About Me</h2>
          <p className="mt-4 text-brand-muted">
            A passionate learner who loves turning ideas into real-world applications.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-12 md:mt-14 md:grid-cols-2">
          <div className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md md:animate-float">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-orange/40 to-transparent blur-2xl md:-inset-4" />
            <div className="rounded-[2rem] border border-brand-border bg-brand-surface p-2">
              <img
                src="/sourav_photo.jpg"
                alt="Sourav Rajput"
                loading="lazy"
                decoding="async"
                className="h-[260px] w-full rounded-[1.7rem] object-cover object-top sm:h-[320px] md:h-[400px] lg:h-[440px]"
              />
            </div>
            <div className="absolute -bottom-4 -left-3 card-surface px-4 py-3 sm:-bottom-6 sm:-left-6 sm:px-5 sm:py-4">
              <div className="text-2xl font-bold text-white sm:text-3xl">3+</div>
              <div className="text-xs text-brand-muted">Years of coding</div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-extrabold text-white md:text-4xl">
              I'm an Aspiring Software Engineer
            </h3>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-brand-muted">
              <p>
                I'm Sourav Rajput, a 2nd year engineering student with a strong passion for software
                development. I enjoy building full-stack applications and solving complex problems
                through clean, efficient code.
              </p>
              <p>
                My journey in tech started with curiosity and has grown into a deep commitment to
                mastering both frontend and backend technologies. I spend my time sharpening my DSA
                skills, building projects with React and Node.js, and exploring DevOps tools like
                Docker.
              </p>
              <p>
                I believe in learning by building. Every project I take on is a chance to grow,
                experiment, and push my limits as a developer.
              </p>
            </div>

            <div className="mt-8">
              <div className="text-xs font-semibold uppercase tracking-widest text-white">
                Tech Stack
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {stack.map((s) => (
                  <span key={s} className="chip hover:border-brand-orange/50 hover:text-white">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <a href="#contact" className="btn-orange mt-8">
              Contact Me <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
