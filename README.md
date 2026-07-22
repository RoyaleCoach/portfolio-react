# RoyaleCoach | Software Developer Portfolio

[![Deploy to GitHub Pages](https://github.com/RoyaleCoach/portfolio-react/actions/workflows/deploy.yml/badge.svg)](https://github.com/RoyaleCoach/portfolio-react/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A production-ready portfolio website showcasing projects, skills, and experience. Built with React 19, Vite 8, and React Router 7 — deployed automatically to GitHub Pages.

**[Live Demo →](https://royalecoach.github.io/portfolio-react/)**

---

## Features

- **Home** — Hero section with typing animation, featured projects, GitHub stats, achievements
- **About** — Bio, philosophy, quick facts, goals, resume download (PDF/DOCX)
- **Skills** — Interactive skill tree (RPG-style), tools & platforms, software engineering concepts
- **Projects** — Filterable project grid with search, detailed project pages with architecture diagrams
- **Experience** — Learning timeline, development philosophy
- **Contact** — Contact form (mailto-based), social links, availability status
- **Floating Terminal** — Draggable interactive terminal with custom commands
- **GitHub Stats** — Live data from GitHub API (repos, stars, followers, top languages)
- **Dark Mode** — Full dark theme with CSS custom properties
- **Responsive** — Mobile-first design with hamburger navigation
- **SEO** — Open Graph, Twitter Cards, meta description, robots.txt, sitemap.xml
- **Accessibility** — ARIA labels, semantic HTML, keyboard navigation
- **Animations** — Intersection Observer fade-ins, scroll progress, particle effects

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Routing | React Router 7 (HashRouter) |
| Styling | CSS3 (Custom Properties, Grid, Flexbox) |
| Deployment | GitHub Pages + GitHub Actions |
| Linting | OxLint |

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/RoyaleCoach/portfolio-react.git
cd portfolio-react

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:5173`.

### Production Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Deployment

This project uses **GitHub Actions** for automatic deployment to **GitHub Pages**.

Every push to `main` triggers:
1. Install dependencies
2. Build the project
3. Deploy `dist/` to GitHub Pages

**Manual deployment** (if needed):

```bash
npm run build
# Contents of dist/ are deployed to GitHub Pages
```

---

## Project Structure

```
portfolio-react/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   ├── assets/                 # Static assets (diagrams, icons, illustrations, logos, projects)
│   ├── resume/                 # Resume files (PDF, DOCX)
│   ├── favicon.svg
│   ├── icons.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/                 # Bundled assets (imported by components)
│   ├── components/
│   │   ├── about/
│   │   │   └── ResumeCard.jsx
│   │   ├── home/
│   │   │   └── GitHubStats.jsx
│   │   ├── layout/
│   │   │   ├── Footer.jsx
│   │   │   ├── Layout.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ScrollProgress.jsx
│   │   │   └── ScrollToTop.jsx
│   │   ├── skills/
│   │   │   ├── SkillDetailPanel.jsx
│   │   │   └── SkillNode.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── FloatingTerminal.jsx
│   │       ├── Particles.jsx
│   │       └── StatCounter.jsx
│   ├── data/
│   │   ├── achievements.json
│   │   ├── concepts.json
│   │   ├── personal.json
│   │   ├── philosophy.json
│   │   ├── projects.json
│   │   ├── skills.json
│   │   ├── timeline.json
│   │   └── tools.json
│   ├── hooks/
│   │   ├── useScrollProgress.js
│   │   └── useTyping.js
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   ├── ProjectDetail.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
├── LICENSE
└── README.md
```

---

## Configuration

### Vite Base Path

The `base` option in `vite.config.js` is set to `/portfolio-react/` to match the GitHub repository name:

```js
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-react/',
})
```

### React Router

Uses **HashRouter** for GitHub Pages compatibility (no server-side routing support).

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Author

**RoyaleCoach**

- GitHub: [@RoyaleCoach](https://github.com/RoyaleCoach)
- LinkedIn: [Royale Coach](https://linkedin.com/in/royale-coach-65a82b353)
- Twitter: [@RoyaleCoach57](https://twitter.com/RoyaleCoach57)
- Instagram: [@oseng_tri](https://instagram.com/oseng_tri)
- Email: royalecoach57@gmail.com

---

*Built with passion, clean architecture, and a lot of terminal sessions.* 🚀
