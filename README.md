# Harsh Pandey — AI Engineer Portfolio

A production-ready personal portfolio website custom-engineered for **Harsh Pandey**, specializing in **AI Agents, LLM Applications, Intelligent Automation, and AI-Powered Products**.

Built with React, TypeScript, Tailwind CSS v4, Lucide Icons, and modern web standards.

---

## 🎨 Design System & Color Grading

The visual identity is designed with the precision of an AI product studio:

- **Light Mode Palette:**
  - Main Background: `#F7F8FA`
  - Primary Typography: `#171923`
  - Secondary Typography: `#667085`
  - Primary Accent: `#3659E8` (Cobalt Royal Blue)
  - Secondary Accent: `#4A8F8C` (Deep Sea Teal)
  - Surface / Cards: `#FFFFFF`
  - Borders: `#E5E7EB`
- **Dark Mode Palette:**
  - Main Background: `#0B1020` (Obsidian Deep Indigo)
  - Dark Surface: `#121A2B` (Slate Navy)
  - Dark Accent: `#8EA8FF` (Electric Periwinkle)
  - Dark Borders: `#1E2A42`
  - Secondary Text: `#94A3B8`

---

## 📂 Project Structure

```
harsh-portfolio/
├── public/
│   ├── favicon.svg          # Custom HP brand mark favicon
│   ├── profile.jpg          # Drop your real portrait photo here
│   ├── resume.pdf           # Drop your real resume PDF here
│   ├── robots.txt           # SEO crawler rules
│   └── sitemap.xml          # XML sitemap pointing to https://harshpandey.tech
├── src/
│   ├── config/
│   │   ├── site.ts          # Central configuration (Name, social, email, domain, SEO)
│   │   ├── projects.ts      # Project records with tags, problem, contribution, links
│   │   └── experience.ts    # Work experience, education, certifications
│   ├── components/
│   │   ├── Navbar.tsx       # Glassmorphism navigation with theme toggle & mobile menu
│   │   ├── Hero.tsx         # AI Engineer identity, CTAs, & profile portrait frame
│   │   ├── About.tsx        # Engineering principles
│   │   ├── Expertise.tsx    # 6 AI Engineering specialization pillars
│   │   ├── Projects.tsx     # Featured flagship layout, filters, verified links
│   │   ├── Skills.tsx       # Grouped tools & technologies behind the intelligence
│   │   ├── Workflow.tsx     # 4-stage AI development process (horizontal on desktop)
│   │   ├── Experience.tsx   # Verified career, education & certification timeline
│   │   ├── Services.tsx     # 8 targeted freelance & client solution offerings
│   │   ├── Contact.tsx      # Contact form with backend hook & fallback email client
│   │   ├── Footer.tsx       # Minimalist brand footer with back-to-top & copyright
│   │   └── Icons.tsx        # Custom SVG icons for GitHub, LinkedIn, X/Twitter
│   ├── hooks/
│   │   └── useScrollSpy.ts  # Active section spy, intersection observer, dark mode hook
│   ├── App.tsx              # Root single-page composition
│   ├── index.css            # Tailwind CSS v4 design system tokens & animation keyframes
│   └── main.tsx             # React DOM entry point
├── index.html               # Semantic HTML with canonical domain, OG tags, JSON-LD
└── package.json
```

---

## ⚙️ Quick Customization Guide

### 1. Update Personal Information (`src/config/site.ts`)
Edit this single file to set:
- **Email:** Set your email address e.g. `contact@harshpandey.tech`
- **Social links:** Add your X/Twitter URL (GitHub and LinkedIn are already configured)
- **Contact Form Endpoint:** Add a Formspree URL (e.g. `https://formspree.io/f/xyz`) to receive submissions directly to your inbox.

### 2. Replace the Portrait Image (`public/profile.jpg`)
Simply drop your high-resolution portrait photograph into:
```
public/profile.jpg
```
*Note: If no file is placed there, the website automatically displays an elegant, editorial placeholder with your initials `HP` against a technical grid backdrop.*

### 3. Replace the Resume PDF (`public/resume.pdf`)
Drop your official resume PDF into:
```
public/resume.pdf
```
Both the Hero "Download Resume" button and the Footer "Resume" link open this file directly.

### 4. Manage Featured Projects (`src/config/projects.ts`)
To add, edit, or reorder projects, edit `src/config/projects.ts`. You can configure:
- `title`, `description`, `problem`, `contribution`
- `technologies` array
- `categories` array (`ai-ml`, `ai-agents`, `ai-automation`, `full-stack`, `other`)
- `githubUrl` and optional `liveUrl`
- `featured: true` to spotlight in the large editorial layout

### 5. Add Experience or Education (`src/config/experience.ts`)
Uncomment or add items to `experienceData`:
```typescript
{
  type: 'work', // or 'education' | 'certification'
  organization: 'Company / Organization',
  role: 'AI Engineer',
  period: '2024 — Present',
  description: 'Built multi-agent workflows and production LLM applications.',
  current: true,
}
```

---

## 🚀 Running Locally

```bash
# Navigate to project directory
cd harsh-portfolio

# Install dependencies (if not already done)
npm install

# Start local development server
npm run dev

# Create optimized production build
npm run build
```

---

## 🌐 Deploying to Custom Domain (`https://harshpandey.tech`)

### Vercel / Render / Netlify
1. Connect your GitHub repository to Vercel or Render.
2. Build Command: `npm run build`
3. Output Directory: `dist`
4. Add your custom domain `harshpandey.tech` in the platform's DNS settings.
5. All canonical URLs, OG tags, sitemap, and robots directives are already pre-configured for `https://harshpandey.tech`.
