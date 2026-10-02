# Feriyan Eka Nanda - Technology Portfolio Website

A modern, interactive, premium, dark futuristic developer portfolio built for **Feriyan Eka Nanda**, an Undergraduate Informatics student at Universitas Gunadarma specializing in **Software Development, Data Analytics, Artificial Intelligence, Machine Learning, and Cybersecurity**.

---

## 🌟 Key Features

- **Dark Futuristic Aesthetic**: Glassmorphism, cyan/electric blue accent lighting, subtle grid matrix backgrounds, dynamic particle network canvas, and high contrast typography.
- **Interactive Hero Section**: Ambient glow background, floating tech badges, quick action CTAs ("Explore My Work", "Download CV"), and direct social channels.
- **Interactive About Me**: 4 3D-tilt domain cards (Software Development, AI/ML, Data Analytics, Cybersecurity) with smooth hover information expansion.
- **Constellation & Skill Categorization**: Skill cards covering Programming Languages, Frontend, Backend, Databases, AI & Data Engineering, and DevOps Tools (without subjective percentage bars).
- **Interactive Project Showcase**: Filterable project gallery (Web, Backend, AI / ML, Data) with 3D tilt cards, tech badges, GitHub links, and live demo triggers.
- **Deep-Dive Project Detail Modal**: Pop-up case study modal featuring overview, problem statement, solution design, system architecture data flow, key features, and performance results.
- **Interactive Trajectory Timeline**: Career & technology journey timeline (2023 - 2026).
- **Education Section**: Cards highlighting Universitas Gunadarma (GPA: 3.78) and SMK PGRI 2 Cibinong.
- **Collectible Achievements & Certifications**: Cards displaying hackathon wins, CTF placements, grants, and security certifications (CRTA, eWPTXv2, AppSec, Linux+, etc.).
- **Interactive Developer CLI Terminal**: Functional Linux-style terminal emulator in the page supporting commands: `help`, `whoami`, `about`, `skills`, `projects`, `education`, `achievements`, `contact`, `cv`, `clear`, and `sudo`.
- **GitHub Contribution Graph Widget**: Visual GitHub activity heatmap with streak counters and statistics.
- **Easter Egg Command Palette (`Ctrl + K` / `Cmd + K`)**: Keyboard-navigable quick command launcher.
- **Desktop Custom Cursor**: Smooth dual-ring spring cursor with magnetic hover detection (disabled on touch devices).
- **SEO & Accessibility**: Complete meta tags, Open Graph card tags, semantic HTML tags, keyboard navigation focus states, and reduced-motion support.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS v4 + Custom Glassmorphism Utilities
- **Animations**: Framer Motion
- **Icons**: Lucide Icons & Custom SVG Brand Icons
- **Interactive Canvas**: HTML5 Canvas Particle Matrix Engine

---

## 🚀 Quick Start & Installation

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18+ recommended) installed on your system.

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally in Development Mode
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
The production bundle will be generated in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
├── public/
│   └── favicon.svg              # Brand logo SVG favicon
├── src/
│   ├── components/              # Reusable UI & Interactive Widgets
│   │   ├── CommandPalette.tsx   # Ctrl+K Easter egg modal
│   │   ├── CustomCursor.tsx     # Desktop spring neon custom cursor
│   │   ├── GithubGraph.tsx      # GitHub contribution heatmap widget
│   │   ├── Icons.tsx            # Custom SVG brand icons (GitHub, LinkedIn)
│   │   ├── Navbar.tsx           # Sticky glassmorphic navbar & mobile drawer
│   │   ├── ParticleBackground.tsx # Interactive background particle canvas
│   │   ├── ProjectModal.tsx     # Deep-dive project case study modal
│   │   ├── ScrollProgress.tsx   # Scroll percentage bar & top trigger
│   │   ├── TechCard.tsx         # 3D Tilt container component
│   │   └── Toast.tsx            # Micro notification toast system
│   ├── data/
│   │   └── portfolioData.ts     # 🎯 Centralized profile data & contents
│   ├── sections/                # Page section modules
│   │   ├── AboutSection.tsx     # Who I Am & 4 interactive domain cards
│   │   ├── AchievementsSection.tsx # Collectible award cards
│   │   ├── CertificationsSection.tsx # Verified certification cards
│   │   ├── ContactSection.tsx   # Let's Build Something contact form
│   │   ├── EducationSection.tsx # Gunadarma & SMK PGRI cards
│   │   ├── HeroSection.tsx      # Epic hero header & floating tech badges
│   │   ├── JourneySection.tsx   # Interactive trajectory timeline
│   │   ├── ProjectsSection.tsx  # Filterable project showcase
│   │   ├── SkillsSection.tsx    # Technical skills grid
│   │   └── TerminalSection.tsx  # Interactive Linux CLI terminal
│   ├── types/
│   │   └── portfolio.ts         # TypeScript interfaces
│   ├── App.tsx                  # Main layout & state orchestrator
│   ├── index.css                # Tailwind CSS imports & glass styles
│   └── main.tsx                 # Entrypoint
├── index.html                   # SEO & Open Graph meta head
├── tailwind.config.js           # Tailwind theme configuration
├── postcss.config.js            # PostCSS configuration
└── README.md                    # Documentation
```

---

## ✏️ Customization Guide

All personal info, skills, projects, achievements, education, and social links are kept in a single file for quick and easy editing:

📁 **`src/data/portfolioData.ts`**

### 1. Update Profile Info
Edit `profileData` in `src/data/portfolioData.ts`:
```typescript
export const profileData: ProfileInfo = {
  name: "Feriyan Eka Nanda",
  status: "Undergraduate Informatics Student at Universitas Gunadarma",
  headline: "Software Developer | Data & AI Enthusiast",
  location: "Depok, Indonesia",
  // ...
  socialLinks: {
    github: "https://github.com/YOUR_GITHUB_USERNAME",
    linkedin: "https://linkedin.com/in/YOUR_LINKEDIN",
    email: "your.email@gmail.com"
  }
};
```

### 2. GitHub Username Environment Variable
You can also set your GitHub username using an environment variable in a `.env` file:
```env
VITE_GITHUB_USERNAME=YOUR_GITHUB_USERNAME
```

### 3. Adding or Updating Projects
Modify the `projectsData` array in `src/data/portfolioData.ts`:
```typescript
{
  id: "my-new-project",
  title: "My Awesome Project",
  category: "AI / ML", // 'Web' | 'Backend' | 'AI / ML' | 'Data'
  description: "Brief overview of what the project does.",
  technologies: ["Python", "PyTorch", "React"],
  image: "https://images.unsplash.com/photo-...",
  githubUrl: "https://github.com/YOUR_USERNAME/repo",
  demoUrl: "https://demo.example.com",
  overview: "Detailed project description...",
  problem: "What challenge did this solve?",
  solution: "How was it solved?",
  architecture: ["Step 1", "Step 2", "Step 3"],
  keyFeatures: ["Feature 1", "Feature 2"],
  results: "High accuracy and low latency."
}
```

---

## 🌐 Deployment Instructions

### Deploy on Vercel
1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import your GitHub repository.
4. Framework Preset: **Vite**.
5. Click **Deploy**.

### Deploy on Netlify
1. Push your repository to GitHub.
2. Go to [Netlify](https://netlify.com) and click **Add new site** -> **Import an existing project**.
3. Select your repository.
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click **Deploy site**.

### Deploy on GitHub Pages
1. Install `gh-pages` package:
   ```bash
   npm install -D gh-pages
   ```
2. Add `base: '/repo-name/'` to `vite.config.ts`.
3. Add deploy scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run `npm run deploy`.

---

## 📄 License

Created for **Feriyan Eka Nanda** © 2026. All rights reserved.
