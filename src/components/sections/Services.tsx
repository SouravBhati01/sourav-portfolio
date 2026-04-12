import { Code2, Database, GitBranch, Rocket, Server, Sigma, ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/Reveal"

const services = [
  {
    Icon: Code2,
    title: "Frontend Development",
    desc: "Building responsive, interactive user interfaces using React, TypeScript, and modern CSS frameworks like Tailwind.",
  },
  {
    Icon: Server,
    title: "Backend Development",
    desc: "Designing and developing RESTful APIs and server-side logic with Node.js, Express, and scalable architectures.",
  },
  {
    Icon: Database,
    title: "Database Management",
    desc: "Structuring and managing data with SQL databases like PostgreSQL and MySQL, along with NoSQL solutions like MongoDB.",
  },
  {
    Icon: Rocket,
    title: "DevOps & Deployment",
    desc: "Containerizing applications with Docker and deploying seamlessly using platforms like Vercel and cloud services.",
  },
  {
    Icon: GitBranch,
    title: "Version Control",
    desc: "Managing codebases efficiently with Git and GitHub — branching, pull requests, code reviews, and CI/CD workflows.",
  },
  {
    Icon: Sigma,
    title: "DSA & Problem Solving",
    desc: "Solving complex algorithmic challenges and applying strong fundamentals in data structures and algorithms.",
  },
]

export function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Services</p>
          <h2 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">What I Do</h2>
          <p className="mt-4 text-brand-muted">
            From crafting pixel-perfect UIs to building robust backends — here's what I bring to the table.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="card-surface group relative h-full overflow-hidden p-7 transition-all duration-500 hover:-translate-y-2 hover:border-brand-orange/50 hover:shadow-[0_20px_50px_-20px_rgba(255,92,40,0.35)]">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-orange/0 blur-3xl transition-all duration-500 group-hover:bg-brand-orange/30" />
                <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-brand-orange/10 text-brand-orange transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white">
                  <Icon size={22} />
                </div>
                <h3 className="relative mt-6 text-lg font-semibold text-white">{title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-brand-muted">{desc}</p>
                <ArrowUpRight
                  size={18}
                  className="absolute right-6 top-6 text-brand-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-orange"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
