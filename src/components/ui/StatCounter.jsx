import { useState, useEffect, useRef } from 'react'

export default function StatCounter({ value, suffix = '+', duration = 1500 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || started.current) return

    if (!('IntersectionObserver' in window)) {
      setCount(value)
      return
    }

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        started.current = true
        const start = performance.now()
        function animate(now) {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.round(eased * value))
          if (progress < 1) requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
        obs.unobserve(el)
      }
    }, { threshold: 0.5 })

    obs.observe(el)
    return () => obs.disconnect()
  }, [value, duration])

  return <span ref={ref}>{count}{suffix}</span>
}
