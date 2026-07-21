import { useEffect, useRef, useState } from 'react'

// Anima um número (inteiro ou decimal) de 0 até `target` ao entrar na viewport.
export function useCountUp(target, dec = 0, duration = 1200) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting || started.current) return
          started.current = true
          io.disconnect()
          if (reduce) {
            setValue(target)
            return
          }
          const t0 = performance.now()
          const tick = (t) => {
            const p = Math.min(1, (t - t0) / duration)
            const eased = 1 - Math.pow(1 - p, 3)
            setValue(target * eased)
            if (p < 1) requestAnimationFrame(tick)
            else setValue(target)
          }
          requestAnimationFrame(tick)
        })
      },
      { threshold: 0.6 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target, duration])

  return [ref, value.toFixed(dec)]
}
