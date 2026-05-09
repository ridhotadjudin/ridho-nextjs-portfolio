# 🌐 Ridho — Next.js Portfolio

![Next.js](https://img.shields.io/badge/Next.js_16.2.3-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19.2.4-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion_12.38.0-0055FF?style=flat-square&logo=framer&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

A modern, responsive personal portfolio and branding website built with Next.js 16, featuring smooth animations, dark/light theme switching, and a component-driven architecture.

---

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
- [Design Patterns](#-design-patterns)
- [Author](#-author)

---

## ✨ Features

- **Dark / Light Mode** — Seamless theme switching powered by `next-themes` with system preference detection and persistent user choice
- **Smooth Animations** — Page transitions and scroll-triggered animations using Framer Motion 12 for a polished, interactive experience
- **Fully Responsive** — Mobile-first design with Tailwind CSS v4 ensuring pixel-perfect layouts across all screen sizes
- **App Router Architecture** — Leverages Next.js 16 App Router for file-based routing, server components, and optimized rendering
- **Component-Driven UI** — Modular, reusable React components for every section — hero, about, skills, experience, projects, certifications, community, and contact
- **Lucide Icons** — Lightweight, customizable SVG icon set integrated across the interface for consistent visual language
- **SEO Optimized** — Metadata, Open Graph tags, and semantic HTML for strong search engine visibility
- **Contact Form** — Functional contact section with form validation and submission handling
- **Certifications Showcase** — Dedicated section to display professional certifications and credentials
- **Community Involvement** — Section highlighting contributions to developer communities and events

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|:-----------|:--------|:--------|
| Next.js | 16.2.3 | React framework with App Router |
| React | 19.2.4 | UI component library |
| TypeScript | 5+ | Type-safe JavaScript |
| Tailwind CSS | v4 | Utility-first CSS framework |
| Framer Motion | 12.38.0 | Animation library |
| next-themes | latest | Dark/light theme management |
| Lucide React | latest | Icon library |

---

## 📁 Project Structure

```
ridho-nextjs-portfolio/
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── About.tsx
│   ├── Certifications.tsx
│   ├── Community.tsx
│   ├── Contact.tsx              # 8 KB — form handling & validation
│   ├── Experience.tsx           # 8.2 KB — timeline & role details
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx                 # 6.4 KB — animated hero section
│   ├── Projects.tsx             # 7.4 KB — project cards & filtering
│   ├── Skills.tsx
│   └── ThemeProvider.tsx
├── public/
│   └── ...                      # Static assets & images
└── README.md
```

---

## 📋 Prerequisites

- **Node.js** 18.17 or higher
- **npm** 9+ or **yarn** 1.22+ or **pnpm** 8+

---

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/ridhotadjudin/ridho-nextjs-portfolio.git
cd ridho-nextjs-portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Create an optimized production build
npm run build

# Start the production server
npm run start
```

### Linting

```bash
# Run ESLint
npm run lint
```

---

## 🏗 Design Patterns

### Component Composition

Each section of the portfolio is an independent React component with its own state, animations, and styling. Components like `Experience.tsx` (8.2 KB) and `Projects.tsx` (7.4 KB) encapsulate complex rendering logic — timelines, card layouts, and filter interactions — while exposing a clean, declarative interface to the parent page.

### App Router Architecture

The project uses Next.js 16 App Router with server components by default, selectively opting into client components (`"use client"`) only where interactivity is needed (theme switching, animations, form handling). This maximizes server-side rendering performance while preserving rich client-side experiences.

### Theme Provider Pattern

`ThemeProvider.tsx` wraps the application with `next-themes`, providing a context-based theme system. Components consume the current theme reactively, enabling instant visual updates without page reloads or layout shifts.

### Animation Orchestration

Framer Motion is used with a layered approach — page-level transitions in the layout, section-level entrance animations triggered by scroll position, and micro-interactions on interactive elements. Animation variants are defined per component, keeping motion design co-located with the UI it enhances.

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Ridho Tadjudin**

- 🌐 Website: [ridhotadjudin.id](https://ridhotadjudin.id)
- 💻 GitHub: [@ridhotadjudin](https://github.com/ridhotadjudin)

