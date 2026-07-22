import { Link } from 'react-router-dom'
import personal from '../data/personal.json'
import StatCounter from '../components/ui/StatCounter'
import ResumeCard from '../components/about/ResumeCard'

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="about-hero" aria-labelledby="about-hero-title">
        <div className="container">
          <div className="about-hero-content">
            <p className="about-hero-greeting fade-in">Hello, I'm</p>
            <h1 className="about-hero-name fade-in delay-1">{personal.name}</h1>
            <p className="about-hero-tagline fade-in delay-2">{personal.tagline}</p>
            <div className="about-hero-meta fade-in delay-3">
              <span className="about-meta-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                {personal.location}
              </span>
              <span className="about-meta-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                {personal.email}
              </span>
              <span className="about-meta-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
                {personal.university}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section about-intro" aria-labelledby="intro-heading">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-avatar-card fade-in">
              <div className="about-avatar">
                <span className="avatar-placeholder">R</span>
              </div>
              <div className="about-avatar-info">
                <h3>{personal.name}</h3>
                <p>{personal.title}</p>
              </div>
            </div>
            <div className="about-intro-text fade-in delay-1">
              <h2 className="section-title" id="intro-heading">Who I Am</h2>
              {personal.bio.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="section about-quick-stats" aria-labelledby="stats-heading">
        <div className="container">
          <h2 className="section-title center" id="stats-heading">Quick Stats</h2>
          <div className="about-quick-stats-grid">
            {personal.stats.map((s, i) => (
              <div key={i} className="about-quick-stat-card fade-in">
                <span className="about-quick-stat-number"><StatCounter value={s.value} suffix={s.suffix} /></span>
                <span className="about-quick-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section about-philosophy" aria-labelledby="philosophy-heading">
        <div className="container">
          <h2 className="section-title center" id="philosophy-heading">Developer Philosophy</h2>
          <p className="section-subtitle center">Principles that guide how I write code</p>
          <div className="philosophy-grid">
            <div className="philosophy-card fade-in">
              <div className="philosophy-icon">🏗️</div>
              <h3>Clean Architecture</h3>
              <p>Code should be organized, modular, and follow SOLID principles. Maintainability over cleverness.</p>
            </div>
            <div className="philosophy-card fade-in delay-1">
              <div className="philosophy-icon">🔒</div>
              <h3>Security First</h3>
              <p>Security is not an afterthought. Every design decision considers the threat model.</p>
            </div>
            <div className="philosophy-card fade-in delay-2">
              <div className="philosophy-icon">🤖</div>
              <h3>AI Integration</h3>
              <p>Leveraging AI agents to build better software faster. Human creativity + machine efficiency.</p>
            </div>
            <div className="philosophy-card fade-in delay-3">
              <div className="philosophy-icon">🐧</div>
              <h3>Open Source</h3>
              <p>Strong believer in open source. Linux user who contributes back to the community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section about-story" aria-labelledby="story-heading">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-text fade-in">
              <h2 className="section-title" id="story-heading">Why I Code</h2>
              {personal.story.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="about-story-quote fade-in delay-1">
              <blockquote className="about-quote">
                <p>"The best code is the code you don't have to write twice."</p>
                <cite>My guiding principle</cite>
              </blockquote>
              <div className="about-focus-card">
                <h4>Currently Exploring</h4>
                <div className="about-focus-tags">
                  {personal.currentlyExploring.map(t => <span key={t} className="about-focus-tag">{t}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="section about-facts" aria-labelledby="facts-heading">
        <div className="container">
          <h2 className="section-title center" id="facts-heading">Quick Facts</h2>
          <div className="facts-grid">
            {personal.facts.map((f, i) => (
              <div key={i} className="fact-item fade-in">
                <span className="fact-label">{f.label}</span>
                <span className="fact-value">{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="section about-goals" aria-labelledby="goals-heading">
        <div className="container">
          <h2 className="section-title center" id="goals-heading">Goals & Aspirations</h2>
          <div className="about-goals-grid">
            {personal.goals.map((g, i) => (
              <div key={i} className="about-goal-card fade-in">
                <div className="about-goal-icon">{g.icon}</div>
                <h3>{g.period}</h3>
                <p>{g.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume */}
      <section className="section" aria-labelledby="resume-heading">
        <div className="container">
          <h2 className="section-title center" id="resume-heading">Resume</h2>
          <ResumeCard />
        </div>
      </section>

      {/* CTA */}
      <section className="section about-cta" aria-labelledby="cta-heading">
        <div className="container">
          <div className="about-cta-content fade-in">
            <h2 className="about-cta-title" id="cta-heading">Let's Build Something Together</h2>
            <p className="about-cta-text">
              Whether it's a project collaboration, open source contribution,
              or just a chat about software engineering — I'd love to hear from you.
            </p>
            <div className="about-cta-actions">
              <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
              <Link to="/projects" className="btn btn-outline">View My Work</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
