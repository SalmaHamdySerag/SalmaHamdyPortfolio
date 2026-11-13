# Salma Hamdy — Portfolio (Next.js)

A production-quality rebuild of the original static HTML portfolio, using
Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, and Framer
Motion — while remaining visually identical to the original design.

## Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** for utility classes (Preflight disabled — the project's
  hand-built design system in `app/globals.css` is the source of truth for
  colors, spacing, and typography, ported verbatim from the original HTML so
  the visual result stays pixel-perfect)
- **Framer Motion** for all animations (reveal-on-scroll, hero stagger,
  modal transitions, icon "draw-in", counters)
- **next/font/google** for Space Grotesk, Inter, JetBrains Mono, and Cairo
- Full **EN / AR** i18n with automatic `dir`/`lang` switching (RTL support
  ported from the original CSS)
- Light/dark theme, persisted to `localStorage`

## Project structure

```
app/
  layout.tsx        Root layout, fonts, providers, metadata
  page.tsx           Assembles all sections
  globals.css        Original design system (source of truth for styling)

components/
  layout/            Header, Navigation, MobileMenu, Footer, BackToTop
  home/               Hero, About, Stack, Experience, Projects, Contact,
                      plus their sub-components (TerminalWindow, TimelineItem,
                      ProjectCard, ProjectFilter, ProjectModal, Gallery)
  ui/                 Container, Button, SectionHead, Tag/Chip, IconDraw,
                      AnimatedCounter
  animations/         Reveal, FadeIn, SlideUp, Stagger (Framer Motion wrappers)

contexts/             ThemeContext, LanguageContext
hooks/                useClock, useScrollSpy, useScrollThreshold, useCountUp
lib/data/             projects.ts, experience.ts, dictionary.ts, icons.tsx
types/                Shared TypeScript types
```

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

> Note: `next/font/google` fetches font files from Google Fonts at build
> time, so an internet connection is required during `next build`/`next dev`.

## Editing content

All copy, project data, and experience entries live in `lib/data/` as plain
TypeScript objects (`projects.ts`, `experience.ts`, `dictionary.ts`) — no
HTML editing required. Each project's gallery currently renders its line-art
cover icon as a placeholder slide; swap the markup in `components/home/Gallery.tsx`
for real `<Image>` screenshots whenever you have them.
