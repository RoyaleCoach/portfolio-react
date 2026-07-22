import { useState } from 'react'
import skillsData from '../data/skills.json'
import tools from '../data/tools.json'
import concepts from '../data/concepts.json'
import SkillNode from '../components/skills/SkillNode'
import SkillDetailPanel from '../components/skills/SkillDetailPanel'

const branchColors = {
  languages: '#4a9eff',
  systems: '#4ade80',
  engineering: '#fbbf24',
  domains: '#a855f7',
}

const toolIcons = {
  circle: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><circle cx="12" cy="12" r="3"/></svg>,
  users: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  monitor: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
  grid: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/></svg>,
  puzzle: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M12 2a4 4 0 014 4v1a2 2 0 002 2 4 4 0 014 4v1a4 4 0 01-4 4h-1a2 2 0 00-2 2v1a4 4 0 01-8 0v-1a2 2 0 00-2-2H4a4 4 0 01-4-4v-1a4 4 0 014-4 2 2 0 002-2V6a4 4 0 014-4z"/></svg>,
  code: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>,
}

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null)
  const [panelOpen, setPanelOpen] = useState(false)

  function handleNodeClick(skill) {
    setSelectedSkill(skill)
    setPanelOpen(true)
  }

  function handleClose() {
    setPanelOpen(false)
    setTimeout(() => setSelectedSkill(null), 350)
  }

  // Close on Escape
  function handleKeyDown(e) {
    if (e.key === 'Escape' && panelOpen) handleClose()
  }

  return (
    <div onKeyDown={handleKeyDown}>
      <section className="section page-header" aria-labelledby="skills-title">
        <div className="container">
          <p className="page-breadcrumb"><a href="/">Home</a> / Skills</p>
          <h1 className="page-title" id="skills-title">Skills &amp; Technologies</h1>
          <p className="page-subtitle">Languages, tools, and concepts I work with</p>
        </div>
      </section>

      {/* Skill Tree */}
      <section className="section skills-section" aria-labelledby="skilltree-heading">
        <div className="container">
          <h2 className="section-title center" id="skilltree-heading">Skill Tree</h2>
          <p className="section-subtitle center">Click nodes to explore — inspired by RPG technology trees</p>
          <div className="skill-tree">
            <div className="skill-tree-grid">
              {skillsData.branches.map(branch => (
                <div key={branch.id} className={`skill-branch branch-${branch.id}`}>
                  <span className="skill-branch-title">{branch.name}</span>
                  {branch.skills.map(skill => (
                    <SkillNode
                      key={skill.id}
                      skill={skill}
                      color={branchColors[branch.id]}
                      onClick={() => handleNodeClick(skill)}
                      isActive={selectedSkill?.id === skill.id}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detail Panel */}
      <SkillDetailPanel skill={selectedSkill} isOpen={panelOpen} onClose={handleClose} />

      {/* Tools */}
      <section className="section skills-section" aria-labelledby="tools-heading">
        <div className="container">
          <h2 className="section-title center" id="tools-heading">Tools &amp; Platforms</h2>
          <div className="tools-grid">
            {tools.map((tool, i) => (
              <div key={i} className="tool-card fade-in">
                <span className="tool-icon">{toolIcons[tool.icon] || toolIcons.code}</span>
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concepts */}
      <section className="section skills-section" aria-labelledby="concepts-heading">
        <div className="container">
          <h2 className="section-title center" id="concepts-heading">Software Engineering</h2>
          <div className="concepts-grid">
            {concepts.map((c, i) => (
              <div key={i} className="concept-tag">{c}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
