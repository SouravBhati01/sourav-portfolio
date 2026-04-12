import { useEffect, useState } from "react"

const lines: { text: string; color: string }[] = [
  { text: "const developer = {", color: "text-brand-muted" },
  { text: "  name: 'Sourav Rajput',", color: "text-white" },
  { text: "  role: 'Full-Stack Dev',", color: "text-white" },
  { text: "  stack: ['React', 'Node',", color: "text-white" },
  { text: "          'TypeScript'],", color: "text-white" },
  { text: "  coffee: Infinity,", color: "text-amber-300" },
  { text: "  shipping: true,", color: "text-emerald-300" },
  { text: "}", color: "text-brand-muted" },
]

export function CodeCard() {
  const [rendered, setRendered] = useState<string[]>(lines.map(() => ""))
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    if (lineIdx >= lines.length) {
      const reset = setTimeout(() => {
        setRendered(lines.map(() => ""))
        setLineIdx(0)
        setCharIdx(0)
      }, 4000)
      return () => clearTimeout(reset)
    }
    const current = lines[lineIdx].text
    if (charIdx > current.length) {
      const next = setTimeout(() => {
        setLineIdx((l) => l + 1)
        setCharIdx(0)
      }, 180)
      return () => clearTimeout(next)
    }
    const tick = setTimeout(() => {
      setRendered((r) => {
        const copy = [...r]
        copy[lineIdx] = current.slice(0, charIdx)
        return copy
      })
      setCharIdx((c) => c + 1)
    }, 45)
    return () => clearTimeout(tick)
  }, [lineIdx, charIdx])

  return (
    <div className="relative overflow-hidden rounded-2xl border border-brand-border bg-[#0d0d14] shadow-2xl">
      <div className="flex items-center gap-2 border-b border-brand-border bg-brand-surface/60 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-amber-400/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
        <span className="ml-3 font-mono text-xs text-brand-muted">developer.ts</span>
      </div>
      <pre className="relative m-0 min-h-[260px] overflow-hidden p-5 font-mono text-[13px] leading-6">
        {rendered.map((txt, i) => (
          <div key={i} className="flex">
            <span className="mr-4 w-5 select-none text-right text-brand-muted/50">{i + 1}</span>
            <span className={lines[i].color}>
              {txt}
              {i === lineIdx && <span className="ml-0.5 inline-block h-4 w-[2px] bg-brand-orange align-middle animate-blink" />}
            </span>
          </div>
        ))}
      </pre>
    </div>
  )
}
