import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import projects from '../data/projects.json'

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return projects.filter(p => {
      const matchFilter = filter === 'all' || p.categories.includes(filter)
      const query = search.toLowerCase().trim()
      const matchSearch = !query ||
        p.name.toLowerCase().includes(query) ||
        p.shortDesc.toLowerCase().includes(query) ||
        p.techTags.some(t => t.toLowerCase().includes(query))
      return matchFilter && matchSearch
    })
  }, [filter, search])

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'python', label: 'Python' },
    { id: 'security', label: 'Security' },
    { id: 'game', label: 'Game' },
    { id: 'cli', label: 'CLI' },
  ]

  return (
    <>
      <section className="section page-header" aria-labelledby="projects-title">
        <div className="container">
          <p className="page-breadcrumb"><Link to="/">Home</Link> / Projects</p>
          <h1 className="page-title" id="projects-title">Projects</h1>
          <p className="page-subtitle">Things I've built — from concept to production</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="projects-filter">
            {filters.map(f => (
              <button
                key={f.id}
                className={`filter-btn${filter === f.id ? ' active' : ''}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="projects-search">
            <input
              type="search"
              placeholder="Search projects..."
              aria-label="Search projects"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          <div className="projects-grid">
            {filtered.map(p => (
              <article key={p.id} className="project-card fade-in">
                <div className="project-card-image">
                  <img src={`${import.meta.env.BASE_URL}assets/projects/${p.image}`} alt={`${p.name} illustration`} width="400" height="200" loading="lazy" />
                </div>
                <div className="project-card-header">
                  <span className={`project-status status-${p.status.toLowerCase()}`}>{p.status}</span>
                  <span className="project-language">{p.language}</span>
                </div>
                <h3 className="project-card-title">{p.name}</h3>
                <p className="project-card-desc">{p.shortDesc}</p>
                <div className="project-tech-tags">
                  {p.techTags.map(t => <span key={t} className="tech-tag">{t}</span>)}
                </div>
                <Link to={`/projects/${p.id}`} className="project-card-link">View Project →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}