import { useState, useEffect } from 'react'

const USERNAME = 'RoyaleCoach'
const CACHE_KEY = 'github_cache'
const CACHE_TTL = 60 * 60 * 1000

function getCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const data = JSON.parse(raw)
    if (Date.now() - data.timestamp > CACHE_TTL) return null
    return data.payload
  } catch { return null }
}

function setCache(payload) {
  try { localStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), payload })) } catch {}
}

function formatNumber(n) {
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k'
  return String(n)
}

export default function GitHubStats() {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    const cached = getCache()
    if (cached) { setStats(cached); return }
    fetch(`https://api.github.com/users/${USERNAME}`)
      .then(r => r.json())
      .then(user =>
        fetch(user.repos_url + '?per_page=100&sort=updated')
          .then(r => r.json())
          .then(repos => ({ user, repos }))
      )
      .then(({ user, repos }) => {
        const totalStars = repos.reduce((s, r) => s + (r.stargazers_count || 0), 0)
        const langs = {}
        repos.forEach(r => { if (r.language) langs[r.language] = (langs[r.language] || 0) + 1 })
        const topLangs = Object.entries(langs).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([l]) => l)
        const data = { publicRepos: user.public_repos, followers: user.followers, totalStars, topLangs, profileUrl: user.html_url }
        setCache(data)
        setStats(data)
      })
      .catch(() => {})
  }, [])

  if (!stats) return <div className="github-stats-loading"><span className="loading-dots">Loading GitHub stats</span></div>

  return (
    <>
      <div className="github-stats-grid">
        <div className="github-stat"><span className="github-stat-value">{formatNumber(stats.publicRepos)}</span><span className="github-stat-label">Repositories</span></div>
        <div className="github-stat"><span className="github-stat-value">{formatNumber(stats.totalStars)}</span><span className="github-stat-label">Stars</span></div>
        <div className="github-stat"><span className="github-stat-value">{formatNumber(stats.followers)}</span><span className="github-stat-label">Followers</span></div>
      </div>
      {stats.topLangs.length > 0 && (
        <div className="github-languages">
          <span className="github-languages-label">Top Languages:</span>
          {stats.topLangs.map(l => <span key={l} className="tech-tag">{l}</span>)}
        </div>
      )}
      <a href={stats.profileUrl} target="_blank" rel="noopener noreferrer" className="github-profile-link">View on GitHub →</a>
    </>
  )
}