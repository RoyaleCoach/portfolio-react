import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import projects from '../../data/projects.json'

export default function SkillDetailPanel({ skill, isOpen, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (isOpen && closeRef.current) {
      setTimeout(() => closeRef.current.focus(), 350)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    function handleEsc(e) { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [isOpen, onClose])

  if (!skill) return null

  const relatedProjects = skill.projects
    ? projects.filter(p => skill.projects.includes(p.id))
    : []

  return (
    <>
      <div
        className={`skill-detail-overlay${isOpen ? ' open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`skill-detail-panel${isOpen ? ' open' : ''}`}
        role="dialog"
        aria-label={`${skill.name} details`}
        aria-hidden={!isOpen}
      >
        <button
          ref={closeRef}
          className="skill-detail-close"
          onClick={onClose}
          aria-label="Close detail panel"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="skill-detail-header">
          <div className="skill-detail-icon">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
              <circle cx="12" cy="12" r="8"/>
            </svg>
          </div>
          <div>
            <h3 className="skill-detail-title">{skill.name}</h3>
            <span className="skill-detail-category">Proficiency: {skill.level}%</span>
          </div>
        </div>

        <div className="skill-detail-body">
          <div className="skill-detail-section">
            <h4>Description</h4>
            <p>{skill.description}</p>
          </div>

          <div className="skill-detail-section">
            <h4>Technologies</h4>
            <div className="skill-detail-tags">
              {skill.tags.map(t => <span key={t} className="skill-detail-tag">{t}</span>)}
            </div>
          </div>

          {relatedProjects.length > 0 && (
            <div className="skill-detail-section">
              <h4>Related Projects</h4>
              <div className="skill-detail-projects">
                {relatedProjects.map(p => (
                  <Link key={p.id} to={`/projects/${p.id}`} className="skill-detail-project-link" onClick={onClose}>
                    {p.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  )
}
