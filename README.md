# Personal Portfolio Website

A dark, elegant, and premium personal portfolio website built with Next.js, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.

## Features

✅ **Modern Tech Stack**
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui components
- Framer Motion animations
- Vercel Analytics & Speed Insights

✅ **Pages & Sections**
- **Home Page (`/`)**: Single scrollable page with sections:
  - Hero with floating metric cards
  - Featured Projects with modal case studies
  - What I Build (3 pillars)
  - Metrics strip
  - Experience timeline
  - About section with skills

✅ **UI/UX Features**
- Dark theme by default
- Sticky navigation with blur effect
- Mobile-responsive with drawer navigation
- Smooth scroll animations
- Hover microinteractions
- Project modal/drawer (responsive)
- Print-optimized resume page

✅ **SEO & Analytics**
- Comprehensive metadata
- Open Graph & Twitter cards
- Sitemap & robots.txt
- Vercel Analytics
- Vercel Speed Insights

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

2. **Update your content**
   All content is in placeholder files under `/data`:
   - `data/site.ts` - Name, headline, metrics, social links
   - `data/projects.ts` - Featured projects with case studies
   - `data/experience.ts` - Work experience timeline
   - `data/skills.ts` - Skills and "What I Build" pillars

3. **Update site configuration**
   - Edit `data/site.ts` to update your name, headline, and site URL
   - Update social links (GitHub, LinkedIn, email, Twitter)

4. **Add your resume PDF**
   - Place your resume PDF at `public/resume.pdf`
   - This is linked from the resume page download button

5. **Add OG image (optional)**
   - Create a 1200x630px image
   - Save as `public/og-image.png`
   - Already referenced in metadata

### Development

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view your site.

### Build

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── resume/
│   │   └── page.tsx        # Resume page
│   ├── api/
│   │   └── contact/
│   │       └── route.ts    # Contact form API
│   ├── sitemap.ts          # Sitemap generator
│   └── robots.ts           # Robots.txt generator
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── sections/           # Home page sections
│   ├── resume/             # Resume page components
│   ├── background-effects.tsx
│   ├── site-header.tsx
│   ├── site-footer.tsx
│   ├── project-card.tsx
│   ├── project-modal.tsx
│   └── contact-form.tsx
├── data/
│   ├── site.ts             # Site config & metadata
│   ├── projects.ts         # Featured projects
│   ├── experience.ts       # Work experience
│   └── skills.ts           # Skills & capabilities
├── lib/
│   └── utils.ts            # Utility functions
├── hooks/
│   └── use-media-query.ts  # Media query hook
└── public/
    ├── resume.pdf          # Your resume PDF
    └── og-image.png        # Open Graph image (1200x630)
\`\`\`

## Customization

### Styling
- Colors and theme variables: `app/globals.css`
- Component styles use Tailwind + shadcn/ui
- Background effects: `components/background-effects.tsx`

### Content Updates
All placeholder content is marked with "TODO" or uses generic examples. Update:
1. `data/site.ts` - Your personal info
2. `data/projects.ts` - Your projects (one example is filled, others have TODOs)
3. `data/experience.ts` - Your work history
4. `data/skills.ts` - Your skills and what you build

### Navigation
Edit anchor links in:
- `components/site-header.tsx`
- `components/site-footer.tsx`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import to Vercel
3. Deploy (zero configuration needed)
4. Update `data/site.ts` with your production URL

### Other Platforms

This is a standard Next.js app and can be deployed anywhere that supports Node.js:
- Netlify
- Railway
- Render
- AWS / GCP / Azure

## Performance

The site is optimized for performance:
- Static generation where possible
- Optimized fonts with `display: swap`
- Lazy-loaded animations
- Optimized images with `next/image`
- Minimal JavaScript bundle

Expected Lighthouse scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## Accessibility

- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Print-friendly resume page

## License

This template is free to use for your personal portfolio. Feel free to customize it to your needs.

## Credits

Built with:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
\`\`\`
