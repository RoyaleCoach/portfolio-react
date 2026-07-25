import { useParams, Link, Navigate } from 'react-router-dom'
import projects from '../data/projects.json'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) return <Navigate to="/projects" replace />

  const related = project.relatedProjects
    ? projects.filter(p => project.relatedProjects.includes(p.id))
    : []

  return (
    <>
      <section className="section page-header" aria-labelledby="project-title">
        <div className="container">
          <p className="page-breadcrumb"><Link to="/">Home</Link> / <Link to="/projects">Projects</Link> / {project.name}</p>
          <h1 className="page-title" id="project-title">{project.name}</h1>
          <p className="page-subtitle">{project.shortDesc}</p>
        </div>
      </section>

      <section className="section project-detail">
        <div className="container">
          <div className="project-detail-grid">
            <div className="project-main">
              <div className="project-section fade-in">
                <div className="project-hero-image">
                  <img src={`${import.meta.env.BASE_URL}assets/projects/${project.image}`} alt={`${project.name} illustration`} width="400" height="200" loading="lazy" />
                </div>
                <h2 className="section-title">Overview</h2>
                <p>{project.fullDesc}</p>
              </div>

              <div className="project-section fade-in delay-1">
                <h2 className="section-title">Architecture</h2>
                {project.id === 'cryptid' && (
                  <div className="architecture-diagram">
                    <img src={`${import.meta.env.BASE_URL}assets/diagrams/cryptid-arch.svg`} alt="Cryptid architecture diagram showing CLI → Services → Crypto → Storage layers" loading="lazy" />
                  </div>
                )}
                <pre className="code-block"><code>{project.architecture}</code></pre>
              </div>

              <div className="project-section fade-in delay-2">
                <h2 className="section-title">Key Features</h2>
                <div className="project-features">
                  {project.features.map((f, i) => <div key={i} className="feature-item"><strong>{f.split('—')[0]}</strong>{f.includes('—') ? ' — ' + f.split('—').slice(1).join('—') : ''}</div>)}
                </div>
              </div>

              <div className="project-section fade-in">
                <h2 className="section-title">Challenges</h2>
                <ul className="text-list">
                  {project.challenges.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              </div>

              <div className="project-section fade-in">
                <h2 className="section-title">Lessons Learned</h2>
                <ul className="text-list">
                  {project.lessons.map((l, i) => <li key={i}>{l}</li>)}
                </ul>
              </div>

              <div className="project-section fade-in">
                <h2 className="section-title">Future Improvements</h2>
                <ul className="text-list">
                  {project.future.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </div>
            </div>

            <aside className="project-sidebar">
              <div className="sidebar-card fade-in">
                <h3>Project Info</h3>
                <div className="info-row"><span className="info-label">Status</span><span className={`project-status status-${project.status.toLowerCase()}`}>{project.status}</span></div>
                <div className="info-row"><span className="info-label">Language</span><span>{project.language}</span></div>
                <div className="info-row"><span className="info-label">License</span><span>{project.license}</span></div>
              </div>
              <div className="sidebar-card fade-in delay-1">
                <h3>Technologies</h3>
                <div className="project-tech-tags">
                  {project.techTags.map(t => <span key={t} className="tech-tag">{t}</span>)}
                </div>
              </div>
              <div className="sidebar-card fade-in delay-2">
                <h3>Links</h3>
                <a href={`https://github.com/RoyaleCoach/${project.id}`} className="btn btn-outline btn-full" target="_blank" rel="noopener noreferrer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  <span>View on GitHub</span>
                </a>
              </div>
              {related.length > 0 && (
                <div className="sidebar-card fade-in delay-3">
                  <h3>Related Projects</h3>
                  <div className="sidebar-links">
                    {related.map(r => <Link key={r.id} to={`/projects/${r.id}`} className="sidebar-link">{r.name} →</Link>)}
                  </div>
                </div>
              )}
            </aside>
          </div>

          <div className="project-back fade-in">
            <Link to="/projects" className="btn btn-outline">← Back to Projects</Link>
          </div>
        </div>
      </section>
    </>
  )
}