export default function SkillNode({ skill, color, onClick, isActive }) {
  return (
    <div
      className={`skill-node fade-in${isActive ? ' active' : ''}`}
      onClick={onClick}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick() } }}
      tabIndex={0}
      role="button"
      aria-label={`${skill.name} — ${skill.level}%`}
    >
      <div className="skill-node-icon" style={{ background: `${color}1a`, color }}>
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
          <circle cx="12" cy="12" r="8"/>
        </svg>
      </div>
      <span className="skill-node-label">{skill.name}</span>
      <div className="skill-node-level">
        <div className="skill-node-level-fill" style={{ '--level': `${skill.level}%` }}/>
      </div>
      <span className="skill-node-level-text">{skill.level}%</span>
    </div>
  )
}
