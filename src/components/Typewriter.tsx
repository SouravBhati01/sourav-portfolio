import { useEffect, useMemo, useRef, useState } from "react"

type Props = {
  words: string[]
  typeSpeed?: number
  deleteSpeed?: number
  pause?: number
  className?: string
}

export function Typewriter({
  words,
  typeSpeed = 80,
  deleteSpeed = 40,
  pause = 1800,
  className = "",
}: Props) {
  const [idx, setIdx] = useState(0)
  const [sub, setSub] = useState("")
  const [deleting, setDeleting] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const longest = useMemo(
    () => words.reduce((a, b) => (a.length >= b.length ? a : b), ""),
    [words],
  )

  useEffect(() => {
    const word = words[idx % words.length]
    if (timerRef.current) clearTimeout(timerRef.current)

    if (!deleting && sub === word) {
      timerRef.current = setTimeout(() => setDeleting(true), pause)
      return
    }
    if (deleting && sub === "") {
      setDeleting(false)
      setIdx((i) => (i + 1) % words.length)
      return
    }
    timerRef.current = setTimeout(
      () => {
        setSub((s) =>
          deleting ? word.substring(0, s.length - 1) : word.substring(0, s.length + 1),
        )
      },
      deleting ? deleteSpeed : typeSpeed,
    )
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [sub, deleting, idx, words, typeSpeed, deleteSpeed, pause])

  return (
    <span
      className="relative inline-flex items-baseline whitespace-nowrap align-baseline"
      style={{
        minWidth: `${longest.length}ch`,
        contain: "layout style",
      }}
      aria-label={words.join(", ")}
    >
      <span className={className}>{sub || "\u00A0"}</span>
      <span
        aria-hidden
        className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.1em] rounded-full bg-brand-orange animate-blink"
        style={{ boxShadow: "0 0 14px rgba(255,92,40,0.9)" }}
      />
    </span>
  )
}
