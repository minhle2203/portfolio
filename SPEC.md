# Portfolio Website — SPEC

## 1. Overview

A personal portfolio website for **minhle2203 (Product Manager)** to showcase past and current product work, with the goal of attracting recruiters and increasing chances of landing roles at top companies.

**Tagline (draft):** "Product Manager — turning problems into shipped solutions."

---

## 2. Target audience

- **Primary:** Recruiters and hiring managers at product companies
- **Secondary:** Fellow PMs, designers, engineers who may refer or collaborate
- **Visitor goal:** In <60 seconds, understand who I am, what I've shipped, and how to contact me

---

## 3. Core requirements

- Web responsive (works on desktop, tablet, mobile browsers)
- No authentication, no user accounts, no database
- Public, indexable by Google
- Fast (< 2s first paint), accessible (WCAG AA)
- Analytics: Google Analytics 4 (visitor count, sources, page flow)

---

## 4. Pages & content

### 4.1 Home (`/`)
- Hero section: name, one-line bio, hero visual or photo
- Featured projects (3 most recent, large thumbnails → click to case study)
- Brief about blurb (2-3 sentences) → link to About
- Footer with social links

### 4.2 Portfolio / Work (`/work`)
- Grid of all projects (1-5 initially, designed to scale)
- Each card: thumbnail, project name, role, year, 1-line summary
- Click → individual case study page

### 4.3 Case study (`/work/[slug]`)

Structure for each project:
- **Hero:** Project name, role, team size, timeline, status (shipped / in progress)
- **Context:** What the product is, who it serves
- **Problem:** What we were solving and why it mattered
- **Research & discovery:** User interviews, data, hypotheses
- **Solution:** What we built, key decisions, tradeoffs
- **Impact:** Metrics (engagement, revenue, retention, NPS — whatever applies)
- **Reflections:** What I'd do differently

### 4.4 About (`/about`)
- Longer bio
- Career timeline (companies, roles, years)
- Skills / methods (e.g. discovery, roadmapping, A/B testing, SQL, etc.)
- Education
- Optional: photo, personal interests

### 4.5 Contact (in footer / dedicated section)
- LinkedIn (external link, opens new tab)
- Email link (`mailto:`)
- Optional: GitHub, Twitter/X

---

## 5. Design direction

**Inspiration:** wjessewright.com, jennyatkins.me, bensol.me, nicolasbackal.com

**Aesthetic:**
- Minimal, lots of whitespace
- Strong typography (serif for headings or geometric sans, large sizes)
- Subtle motion (fade-in on scroll, smooth page transitions)
- Limited color palette (1 accent color + neutrals)
- High-quality visuals per project (mockups, screenshots, data viz)

**Note for PM-flavor:** Where designer portfolios lead with visuals, PM portfolios should lead with **storytelling and outcomes**. Visuals support the narrative, they're not the narrative.

---

## 6. Tech stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 15** (App Router) | React-based, SEO-friendly, fast, Vercel-native |
| Language | **TypeScript** | Catches bugs early; Claude Code writes better TS than JS |
| Styling | **Tailwind CSS** | Fast iteration, no CSS file sprawl |
| Content | **MDX files** in `/content/work/` | Each case study is one Markdown file with embedded React components. No CMS needed for v1. |
| Animation | **Framer Motion** | Smooth transitions matching reference sites |
| Analytics | **Google Analytics 4** via `@next/third-parties` | Official Next.js integration, lightweight |
| Hosting | **Vercel** | Free tier, zero-config deploy, automatic HTTPS |
| Domain | TBD (optional v2: buy `minhle.com` or similar via Namecheap) | Free `*.vercel.app` subdomain for v1 |

**Not included in v1 (future):**
- CMS (Contentful, Sanity) — overkill for <15 projects
- Blog — separate from portfolio scope
- i18n — single language (English) for international recruiters
- Dark mode — nice to have, defer to v2
- Contact form — `mailto:` link is enough; no backend needed

---

## 7. Folder structure (planned)

```
portfolio/
├── app/
│   ├── page.tsx                 # Home
│   ├── work/
│   │   ├── page.tsx            # Work grid
│   │   └── [slug]/page.tsx     # Dynamic case study
│   ├── about/page.tsx
│   ├── layout.tsx              # Shared header/footer
│   └── globals.css
├── content/
│   └── work/
│       ├── project-1.mdx
│       └── project-2.mdx
├── components/
│   ├── ProjectCard.tsx
│   ├── Hero.tsx
│   └── Footer.tsx
├── public/
│   └── images/                 # Project screenshots
├── package.json
└── README.md
```

---

## 8. Milestones

| # | Milestone | Hours (est.) |
|---|---|---|
| **M1** | Project scaffold (Next.js + Tailwind), deploy empty site to Vercel | 2 |
| **M2** | Layout shell: header, footer, typography, color tokens | 2 |
| **M3** | Home page with hero + featured projects (placeholder content) | 3 |
| **M4** | Work grid page + 1 full case study (real content for 1 project) | 4 |
| **M5** | About page + Contact links | 2 |
| **M6** | Add 2-4 more case studies | 4 |
| **M7** | Animations, polish, GA4 integration | 2 |
| **M8** | Launch: custom domain, social meta tags, Lighthouse audit | 2 |
| | **Total** | **~21 hours** (≈ 3-4 weeks at 5-7h/week) |

---

## 9. Content to prepare (action items for Marcus)

Before / during M4, gather for **each project**:
- Project name + role + team + dates
- 3-5 bullet outcomes/metrics
- 2-4 visuals: screenshots, before/after, flowcharts, data charts
- 1 paragraph each for: Problem, Research, Solution, Impact
- Optional: 1 quote from teammate or user

For About:
- 1 paragraph bio
- Career history (company, role, years, 1-line description)
- 5-8 skills / methods
- Profile photo (optional but recommended)

---

## 10. Success criteria (v1 launch)

- Live URL accessible to anyone
- All 4 main pages working (Home, Work grid, At least 1 case study, About)
- LinkedIn + Email links functional
- GA4 tracking visits
- Lighthouse: Performance ≥ 90, Accessibility ≥ 90, SEO ≥ 90
- Mobile-friendly (no horizontal scroll, tap targets ≥ 44px)
- Marcus can confidently share the URL on LinkedIn and in job applications
