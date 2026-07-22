import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import personal from '../data/personal.json'
import projects from '../data/projects.json'
import achievements from '../data/achievements.json'
import useTyping from '../hooks/useTyping'
import StatCounter from '../components/ui/StatCounter'
import Particles from '../components/ui/Particles'

const GitHubStats = lazy(() => import('../components/home/GitHubStats'))

const phrases = ['Software', 'CLI Tools', 'Secure Systems', 'Clean Architecture', 'AI Solutions']

function Hero() {
  const typedText = useTyping(phrases)
  return (
    <header className="hero" id="home">
      <div className="hero-background" aria-hidden="true">
        <img src="/assets/illustrations/hero.svg" alt="" className="hero-illustration" width="800" height="500" />
      </div>
      <div className="hero-particles" aria-hidden="true"><Particles /></div>
      <div className="hero-content">
        <p className="hero-greeting fade-in">Hello, I'm</p>
        <h1 className="hero-name fade-in delay-1">{personal.name}</h1>
        <div className="hero-title-wrapper fade-in delay-2">
          <span className="hero-title-prefix">I build</span>
          <span className="hero-title-typing">{typedText}</span>
          <span className="typing-cursor" aria-hidden="true"></span>
        </div>
        <p className="hero-description fade-in delay-3">{personal.shortBio}</p>
        <div className="hero-actions fade-in delay-4">
          <Link to="/projects" className="btn btn-primary">
            <span>View Projects</span>
            <svg className="btn-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
        </div>
        <div className="hero-socials fade-in delay-5">
          {personal.socials.map(s => (
            <a key={s.icon} href={s.url} className="social-link" aria-label={s.name} target="_blank" rel="noopener noreferrer">
              <SocialIcon name={s.icon} />
            </a>
          ))}
        </div>
      </div>
      <div className="scroll-indicator" aria-hidden="true">
        <span>Scroll Down</span>
        <div className="scroll-arrow"></div>
      </div>
    </header>
  )
}

function SocialIcon({ name }) {
  const icons = {
    github: <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>,
    linkedin: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>,
    twitter: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>,
    instagram: <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.88 0 1.441 1.441 0 012.88 0z"/>
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      {icons[name] || icons.github}
    </svg>
  )
}

export default function Home() {
  const featuredProjects = projects.slice(0, 4)

  return (
    <>
      <Hero />

      <section className="section featured-projects" aria-labelledby="featured-heading">
        <div className="container">
          <h2 className="section-title" id="featured-heading">Featured Projects</h2>
          <p className="section-subtitle">A selection of things I've built recently</p>
          <div className="projects-grid">
            {featuredProjects.map(p => (
              <article key={p.id} className="project-card" data-category={p.categories.join(' ')}>
                <div className="project-card-image">
                  <img src={`/assets/projects/${p.image}`} alt={`${p.name} illustration`} width="400" height="200" loading="lazy" />
                </div>
                <div className="project-card-header">
                  <span className={`project-status status-${p.status.toLowerCase()}`}>{p.status}</span>
                  <span className="project-language">{p.language}</span>
                </div>
                <h3 className="project-card-title">{p.name}</h3>
                <p className="project-card-desc">{p.shortDesc}</p>
                <div className="project-tech-tags">
                  {p.techTags.slice(0, 4).map(t => <span key={t} className="tech-tag">{t}</span>)}
                </div>
                <Link to={`/projects/${p.id}`} className="project-card-link">View Project →</Link>
              </article>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/projects" className="btn btn-outline">View All Projects</Link>
          </div>
        </div>
      </section>

      <section className="section quick-about" aria-labelledby="about-heading">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2 className="section-title" id="about-heading">About Me</h2>
              <p>
                I'm a Software Developer and Computer Science student who believes
                in writing clean, maintainable code. I'm passionate about
                <strong> software architecture</strong>, <strong>AI integration</strong>,
                <strong> cybersecurity</strong>, and <strong>system design</strong>.
              </p>
              <p>
                When I'm not coding, I'm exploring new technologies, contributing
                to open source, or diving deep into Linux system internals.
              </p>
              <Link to="/about" className="btn btn-primary">More About Me</Link>
            </div>
            <div className="about-stats">
              {personal.stats.map((s, i) => (
                <div key={i} className="stat-card">
                  <span className="stat-number"><StatCounter value={s.value} suffix={s.suffix} /></span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section github-stats" aria-labelledby="github-heading">
        <div className="container">
          <h2 className="section-title" id="github-heading">GitHub Activity</h2>
          <p className="section-subtitle">Live data from my GitHub profile</p>
          <Suspense fallback={<div className="github-stats-loading"><span className="loading-dots">Loading GitHub stats</span></div>}>
            <GitHubStats />
          </Suspense>
        </div>
      </section>

      <section className="section achievements-section" aria-labelledby="achievements-heading">
        <div className="container">
          <h2 className="section-title" id="achievements-heading">Achievements</h2>
          <p className="section-subtitle">Milestones and things I'm proud of</p>
          <div className="achievements-grid">
            {achievements.map((a, i) => (
              <div key={i} className="achievement-card fade-in">
                <span className="achievement-icon">{a.icon}</span>
                <span className="achievement-title">{a.title}</span>
                <span className="achievement-desc">{a.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
