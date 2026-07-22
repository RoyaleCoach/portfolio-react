import { useState, useEffect, useRef, useCallback } from 'react'

export default function useTyping(phrases, { typeSpeed = 100, deleteSpeed = 50, pauseEnd = 2000, pauseStart = 500 } = {}) {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const indexRef = useRef(0)
  const textRef = useRef('')
  const isDeletingRef = useRef(false)

  // Keep refs in sync
  useEffect(() => { textRef.current = text }, [text])
  useEffect(() => { isDeletingRef.current = isDeleting }, [isDeleting])

  const tick = useCallback(() => {
    const phrase = phrases[indexRef.current]
    const currentText = textRef.current
    const deleting = isDeletingRef.current

    if (!deleting) {
      const next = phrase.substring(0, currentText.length + 1)
      setText(next)
      if (next.length === phrase.length) {
        setTimeout(() => setIsDeleting(true), pauseEnd)
        return
      }
      setTimeout(tick, typeSpeed)
    } else {
      const next = phrase.substring(0, currentText.length - 1)
      setText(next)
      if (next.length === 0) {
        setIsDeleting(false)
        indexRef.current = (indexRef.current + 1) % phrases.length
        setTimeout(tick, pauseStart)
        return
      }
      setTimeout(tick, deleteSpeed)
    }
  }, [phrases, typeSpeed, deleteSpeed, pauseEnd, pauseStart])

  useEffect(() => {
    const timeout = setTimeout(tick, 1000)
    return () => clearTimeout(timeout)
  }, [tick])

  return text
}
