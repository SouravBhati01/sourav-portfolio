import { useEffect, useRef, useState } from "react"

type Props = {
  value: number
  label: string
  size?: number
  stroke?: number
}

export function CircularProgress({ value, label, size = 120, stroke = 8 }: Props) {
  const [progress, setProgress] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const radius = (size - stroke) / 2
  const circ = 2 * Math.PI * radius

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            let start: number | null = null
            const duration = 1200
            const animate = (t: number) => {
              if (start === null) start = t
              const p = Math.min((t - start) / duration, 1)
              setProgress(Math.round(p * value))
              if (p < 1) requestAnimationFrame(animate)
            }
            requestAnimationFrame(animate)
            io.disconnect()
          }
        })
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [value])

  const offset = circ - (progress / 100) * circ

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="hsl(var(--border))"
            strokeWidth={stroke}
            fill="none"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#FF5C28"
            strokeWidth={stroke}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circ}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 120ms linear" }}
          />
        </svg>
        <div className="absolute inset-0 grid place-items-center font-display text-xl font-bold text-white">
          {progress}%
        </div>
      </div>
      <div className="mt-3 text-sm font-medium text-brand-muted">{label}</div>
    </div>
  )
}
