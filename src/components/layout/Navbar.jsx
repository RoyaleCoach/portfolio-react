import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import personal from '../../data/personal.json'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 50) }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/skills', label: 'Skills' },
    { to: '/projects', label: 'Projects' },
    { to: '/experience', label: 'Journey' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo" aria-label="Home">
            <span className="logo-bracket">&lt;</span>{personal.name}<span className="logo-bracket">/&gt;</span>
          </NavLink>
          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="hamburger"></span>
          </button>
          <ul className={`nav-menu${isOpen ? ' open' : ''}`} role="menubar">
            {links.map(l => (
              <li key={l.to} role="none">
                <NavLink
                  to={l.to}
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className={`nav-overlay${isOpen ? ' active' : ''}`} onClick={() => setIsOpen(false)} aria-hidden="true" />
    </>
  )
}