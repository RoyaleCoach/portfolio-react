import { Link } from 'react-router-dom'
import personal from '../../data/personal.json'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          <p className="footer-copy">&copy; 2026 {personal.name}. Built with care and clean code.</p>
          <nav className="footer-links" aria-label="Footer navigation">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}