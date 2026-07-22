import { Link } from 'react-router-dom'
import timeline from '../data/timeline.json'
import philosophy from '../data/philosophy.json'

export default function Experience() {
  return (
    <>
      <section className="section page-header" aria-labelledby="journey-title">
        <div className="container">
          <p className="page-breadcrumb"><Link to="/">Home</Link> / Journey</p>
          <h1 className="page-title" id="journey-title">Learning Journey</h1>
          <p className="page-subtitle">How curiosity turned into a passion for building software</p>
        </div>
      </section>

      <section className="section timeline-section" aria-labelledby="timeline-heading">
        <div className="container">
          <h2 className="section-title center" id="timeline-heading">Timeline</h2>
          <div className="timeline">
            {timeline.map((item, i) => (
              <div key={i} className="timeline-item fade-in">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-date">{item.date}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section philosophy-section" aria-labelledby="philosophy-heading">
        <div className="container">
          <h2 className="section-title center" id="philosophy-heading">Development Philosophy</h2>
          <div className="philosophy-grid">
            {philosophy.map((p, i) => (
              <div key={i} className="philosophy-card fade-in">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
