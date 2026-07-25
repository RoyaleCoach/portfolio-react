import { useState, useEffect, useRef, useCallback } from 'react'

const TERMINAL_WIDTH = 420
const TERMINAL_HEADER_HEIGHT = 40
const MARGIN = 16

const commands = {
  help: () => `Available commands:
  about          — About me
  skills         — My tech stack
  projects       — View my projects
  github         — My GitHub profile
  resume         — View/download resume
  contact        — How to reach me
  timeline       — My journey
  stats          — Quick stats
  social         — Social links
  fun            — Fun facts
  clear          — Clear terminal
  help           — Show this message`,

  about: () => `RoyaleCoach — Informatics Engineering student at ITS (FTEIC).
Passionate about software engineering, AI, cryptography, and Linux.
I enjoy building systems from scratch and understanding how things work.`,

  skills: () => `Languages:     Python ████████░░  Go ██████░░░░  Rust ████░░░░░░
               C# █████░░░░░  JavaScript ███████░░░  C/C++ ████░░░░░░
Tools:         Linux, Git, VS Code, Docker, SQLite
Concepts:      Clean Architecture, SOLID, OOP, Cryptography, Algorithms`,

  projects: () => `Featured Projects:
  • Cryptid     — CLI cryptographic toolkit (AES-256-GCM + Argon2id)
  • RPG-Game    — Terminal RPG with combat, skill trees, SQLite
  • QRGen       — Terminal QR code generator (Unicode + ASCII)
  • NoteApp     — Desktop note-taking application

Visit: https://github.com/RoyaleCoach`,

  github: () => `GitHub: https://github.com/RoyaleCoach
Feel free to explore my repositories and contributions.`,

  resume: () => `Resume available at: ${import.meta.env.BASE_URL}resume/RoyaleCoach_Software_Engineering_Portfolio.pdf\nDownload: Use the About page or Contact page button.\nFormats: PDF, DOCX`,

  contact: () => `Email:    royalecoach57@gmail.com
GitHub:   https://github.com/RoyaleCoach
LinkedIn: https://linkedin.com/in/royale-coach-65a82b353
Twitter:  https://twitter.com/RoyaleCoach57`,

  timeline: () => `My Journey:
  COVID-19     — Started programming (C#)
  2023-2024    — Learned Python, explored CS fundamentals
  2024         — Built RPG-Game, NoteApp
  2025         — Learned Go, Rust, built QRGen
  2026         — Built Cryptid, Portfolio, Memory System
  Now          — Studying at ITS, building more`,

  stats: () => `Quick Stats:
  Projects:     4+ featured
  Languages:    6+
  Status:       Active student at ITS
  OS:           Linux (Debian)
  Editor:       VS Code`,

  social: () => `Find me online:
  GitHub:    https://github.com/RoyaleCoach
  LinkedIn:  https://linkedin.com/in/royale-coach-65a82b353
  Twitter:   https://twitter.com/RoyaleCoach57
  Instagram: https://instagram.com/oseng_tri`,

  fun: () => `Fun Facts:
  • I enjoy hiking and being outdoors
  • I love understanding how software works internally
  • I enjoy building software from scratch
  • Linux isn't just my OS — it's my hobby
  • Software architecture is my kind of puzzle`,

  clear: () => '__CLEAR__',
}

export default function FloatingTerminal() {
  const [lines, setLines] = useState([])
  const [input, setInput] = useState('')
  const [minimized, setMinimized] = useState(false)
  const [history, setHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [position, setPosition] = useState(null)
  const [savedPosition, setSavedPosition] = useState(null)
  const [dragging, setDragging] = useState(false)
  const [showRestore, setShowRestore] = useState(false)
  const terminalRef = useRef(null)
  const inputRef = useRef(null)
  const dragOffset = useRef({ x: 0, y: 0 })
  const dragStartPos = useRef({ x: 0, y: 0 })

  const addLine = useCallback((text, type = 'result') => {
    setLines(prev => [...prev, { text, type }])
  }, [])

  const executeCommand = useCallback((cmd) => {
    const trimmed = cmd.trim().toLowerCase()
    addLine(`royale@portfolio:~$ ${trimmed}`, 'echo')
    if (!trimmed) return

    setHistory(prev => [...prev, trimmed])
    setHistoryIndex(-1)

    if (trimmed === 'clear') {
      setLines([])
    } else if (commands[trimmed]) {
      const result = commands[trimmed]()
      addLine(result, 'result')
    } else {
      addLine(`Command not found: ${trimmed}. Type 'help' for available commands.`, 'error')
    }
  }, [addLine])

  // Dragging with Pointer Events
  const startDrag = useCallback((e) => {
    if (e.target.closest('button')) return
    const term = terminalRef.current
    if (!term) return
    // Calculate offset from the terminal's top-left corner to the pointer position
    const rect = term.getBoundingClientRect()
    dragOffset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
    dragStartPos.current = { x: rect.left, y: rect.top }
    setDragging(true)
    e.preventDefault()
    e.currentTarget.setPointerCapture?.(e.pointerId)
  }, [])

  const onPointerMove = useCallback((e) => {
    if (!dragging) return
    e.preventDefault()
    const term = terminalRef.current
    if (!term) return
    const x = e.clientX - dragOffset.current.x
    const y = e.clientY - dragOffset.current.y
    // Clamp to viewport with margin
    const maxX = window.innerWidth - term.offsetWidth - MARGIN
    const maxY = window.innerHeight - TERMINAL_HEADER_HEIGHT - MARGIN
    const clampedX = Math.max(MARGIN, Math.min(maxX, x))
    const clampedY = Math.max(MARGIN, Math.min(maxY, y))
    term.style.left = clampedX + 'px'
    term.style.top = clampedY + 'px'
    term.style.right = 'auto'
    term.style.bottom = 'auto'
  }, [dragging])

  const onPointerUp = useCallback((e) => {
    if (!dragging) return
    setDragging(false)
    const term = terminalRef.current
    if (term) {
      setPosition({ left: term.style.left, top: term.style.top })
    }
    e.currentTarget?.releasePointerCapture?.(e.pointerId)
  }, [dragging])

  useEffect(() => {
    if (!dragging) return
    document.addEventListener('pointermove', onPointerMove)
    document.addEventListener('pointerup', onPointerUp)
    return () => {
      document.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('pointerup', onPointerUp)
    }
  }, [dragging, onPointerMove, onPointerUp])

  // Focus input on click
  const focusInput = useCallback(() => {
    if (!minimized && inputRef.current) inputRef.current.focus()
  }, [minimized])

  // Initial welcome message
  useEffect(() => {
    addLine('Welcome! Type help for commands.', 'welcome')
  }, [addLine])

  const handleSubmit = (e) => {
    e.preventDefault()
    executeCommand(input)
    setInput('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // Let handleSubmit handle it — don't double-fire
      return
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (history.length > 0) {
        const newIndex = historyIndex < 0 ? history.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setInput(history[newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex >= 0) {
        const newIndex = historyIndex + 1
        if (newIndex >= history.length) {
          setHistoryIndex(-1)
          setInput('')
        } else {
          setHistoryIndex(newIndex)
          setInput(history[newIndex])
        }
      }
    }
  }

  const minimize = () => {
    if (!minimized) {
      const term = terminalRef.current
      if (term) {
        const rect = term.getBoundingClientRect()
        setSavedPosition({ left: rect.left + 'px', top: rect.top + 'px' })
      }
      if (position) setSavedPosition(position)
      setMinimized(true)
      setShowRestore(true)
    }
  }

  const restore = () => {
    setMinimized(false)
    setShowRestore(false)
    setTimeout(() => inputRef.current?.focus(), 100)
  }

  const terminalStyle = position && !minimized ? { left: position.left, top: position.top, right: 'auto', bottom: 'auto' } : {}

  return (
    <>
      <div
        className={`terminal${minimized ? ' minimized' : ''}${dragging ? ' dragging' : ''}`}
        style={terminalStyle}
        onClick={focusInput}
        ref={terminalRef}
      >
        <div className="terminal-header" onPointerDown={startDrag}>
          <div className="terminal-dots">
            <span className="dot dot-close" />
            <span className="dot dot-minimize" />
            <span className="dot dot-maximize" />
          </div>
          <span className="terminal-title">royale@portfolio:~$</span>
          <button className="terminal-minimize-btn" onClick={(e) => { e.stopPropagation(); minimize() }} aria-label="Minimize terminal" title="Minimize">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="terminal-body">
          <div className="terminal-output">
            {lines.map((line, i) => (
              <div key={i} className={`terminal-${line.type === 'echo' ? 'echo' : line.type === 'error' ? 'error' : 'result'}`}>
                {line.type === 'welcome' ? (
                  <div className="terminal-welcome">
                    <span className="terminal-prompt">royale@portfolio:~$</span>
                    <span className="terminal-welcome-text">{line.text}</span>
                  </div>
                ) : line.type === 'echo' ? (
                  <span className="terminal-echo-text">{line.text}</span>
                ) : (
                  <pre className="terminal-result">{line.text}</pre>
                )}
              </div>
            ))}
          </div>
          <form className="terminal-input-line" onSubmit={handleSubmit}>
            <span className="terminal-prompt">royale@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              className="terminal-input"
              aria-label="Terminal input"
              autoComplete="off"
              spellCheck="false"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </form>
        </div>
      </div>

      {showRestore && (
        <button className="terminal-restore" onClick={restore} aria-label="Restore terminal">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M5 8h6M8 5v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span>Terminal</span>
        </button>
      )}
    </>
  )
}
