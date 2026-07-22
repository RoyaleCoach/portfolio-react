import { useEffect, useRef } from 'react'

export default function Particles({ count = 30 }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container || window.innerWidth <= 768) return

    const fragment = document.createDocumentFragment()
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div')
      const size = Math.random() * 3 + 1
      particle.style.cssText = [
        'position: absolute',
        `width: ${size}px`,
        `height: ${size}px`,
        'background: var(--color-primary)',
        'border-radius: 50%',
        `opacity: ${(Math.random() * 0.3 + 0.1).toFixed(2)}`,
        `left: ${(Math.random() * 100).toFixed(1)}%`,
        `top: ${(Math.random() * 100).toFixed(1)}%`,
        `animation: float ${(Math.random() * 4 + 4).toFixed(1)}s ease-in-out infinite`,
        `animation-delay: ${(Math.random() * 3).toFixed(1)}s`,
      ].join(';')
      fragment.appendChild(particle)
    }
    container.appendChild(fragment)
  }, [count])

  return <div ref={containerRef} aria-hidden="true" />
}
