# 🚀 Ridho Tadjudin — Personal Portfolio

A modern, responsive personal branding website built with **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**. Features dark/light mode, smooth scroll animations, and a clean card-based design.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **Dark/Light Mode** — Automatic system detection with manual toggle
- **Smooth Animations** — Scroll-triggered reveals powered by Framer Motion
- **Responsive Design** — Mobile-first layout with breakpoints for all screen sizes
- **Interactive Timeline** — Expandable work experience with achievement metrics
- **Project Case Studies** — Challenge → Approach → Impact format
- **SEO Optimized** — OpenGraph, Twitter cards, meta tags, and structured metadata
- **Contact Form** — Mailto-based contact with pre-filled subject/body
- **CV Download** — One-click resume download

## 📸 Sections

| Section | Description |
|---------|------------|
| **Hero** | Animated role title cycling, gradient name, CTA buttons, social links |
| **About** | Professional narrative with 4 key impact stat cards |
| **Experience** | Interactive vertical timeline with 6 roles and expandable achievements |
| **Skills** | 7-category tech stack grid with pill badges |
| **Projects** | 5 project case studies with challenge/approach/impact metrics |
| **Certifications** | Education card + 13 certification badges with color-coded categories |
| **Community** | Speaking engagements, volunteering, and sustainability work |
| **Contact** | Contact form + direct email/LinkedIn/GitHub links |

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Dark Mode | [next-themes](https://github.com/pacocoursey/next-themes) |
| Fonts | Geist Sans & Geist Mono (via `next/font`) |

## 📁 Project Structure

```
ridho-portfolio/
├── public/
│   └── cv.pdf                    # Downloadable CV
├── src/
│   ├── app/
│   │   ├── globals.css           # Theme variables, utilities
│   │   ├── layout.tsx            # Root layout with SEO metadata
│   │   └── page.tsx              # Main page assembling all sections
│   └── components/
│       ├── ThemeProvider.tsx      # Dark/light mode provider
│       ├── Header.tsx            # Responsive nav with theme toggle
│       ├── Hero.tsx              # Landing section with animated roles
│       ├── About.tsx             # Bio narrative + stats strip
│       ├── Experience.tsx        # Interactive work timeline
│       ├── Skills.tsx            # Tech stack grid
│       ├── Projects.tsx          # Case study cards
│       ├── Certifications.tsx    # Certs + education
│       ├── Community.tsx         # Speaking & volunteering
│       ├── Contact.tsx           # Contact form + links
│       └── Footer.tsx            # Social links footer
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.17 or later
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/ridhotadjudin/ridho-portfolio.git
cd ridho-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## 🎨 Customization

### Theme Colors

Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --primary: #3b82f6;    /* Blue — main accent */
  --accent: #06b6d4;     /* Cyan — secondary accent */
  --background: #ffffff;  /* Light mode background */
}

.dark {
  --primary: #60a5fa;
  --accent: #22d3ee;
  --background: #0f172a;  /* Dark mode background */
}
```

### Content

All content is defined as data arrays within each component file in `src/components/`. Edit the arrays directly:

- **Experience**: `jobs` array in `Experience.tsx`
- **Skills**: `categories` array in `Skills.tsx`
- **Projects**: `projects` array in `Projects.tsx`
- **Certifications**: `certifications` array in `Certifications.tsx`
- **Community**: `activities` array in `Community.tsx`

## 🌐 Deployment

### GitHub Pages

```bash
# Add to next.config.ts:
# output: 'export'
npm run build
# Deploy the `out/` folder to GitHub Pages
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by **Ridho Tadjudin**