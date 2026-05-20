# Ottawa Elite Basketball — Website

Marketing and information website for Ottawa Elite Basketball, Ottawa's premier youth basketball program.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** — page and scroll animations
- **React Hook Form + Zod** — contact form validation
- **yet-another-react-lightbox** — gallery lightbox

## Pages

| Route | Description |
|---|---|
| `/` | Home — animated basketball hero, stats bar, programs preview, news strip, gallery teaser, sponsors |
| `/teams` | All team programs (U13–U19 Prep, EVO Boys/Girls) |
| `/news` | News articles index |
| `/news/[slug]` | Individual article |
| `/gallery` | Photo gallery with lightbox |
| `/about` | Club history, mission, and coach profiles |
| `/contact` | Contact form |

## API Routes

- `POST /api/contact` — validates and processes contact form submissions. Currently logs to console; wire up Resend/SendGrid for production email delivery.

## Project Structure

```
src/
  app/          # Next.js App Router pages and API routes
  components/   # UI components grouped by page/feature
    home/       # Hero, StatsBar, ProgramsPreview, NewsStrip, etc.
    layout/     # Navbar, Footer
    ui/         # Shared primitives (Button, Badge, SectionHeading, AnimatedBasketballBg, etc.)
    about/      # CoachCard, AboutContent
    news/       # ArticleCard, NewsContent
    gallery/    # GalleryContent
    contact/    # ContactContent
    teams/      # TeamCard, TeamsContent
  data/         # Static data files (teams, coaches, news, gallery, sponsors)
  lib/          # Utilities, animation presets, site-wide constants
  types/        # Shared TypeScript types
public/
  images/       # Logos, coach photos, gallery images, sponsor logos, promo assets
```

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Other Commands

```bash
npm run build   # Production build
npm run start   # Serve the production build
npm run lint    # ESLint
```

## Content Updates

All site content lives in `src/data/`:

- `teams.ts` — team programs, coaches, divisions
- `coaches.ts` — coach profiles for the About page
- `news.ts` — news articles
- `gallery.ts` — gallery image metadata
- `sponsors.ts` — sponsor logos and links

Site-wide config (name, contact email, social links, nav) is in `src/lib/constants.ts`.

## Notable Implementation Details

- **Hero background** — `src/components/ui/AnimatedBasketballBg.tsx` renders two SVG basketballs (large upper-right, medium left-center) that float and rotate continuously via Framer Motion. Respects `prefers-reduced-motion`. The gradient overlays in `Hero.tsx` sit on top and ensure text stays readable.
- **Sponsors marquee** — uses 4 copies of the sponsor list with a `translateX(-25%)` keyframe (one copy's worth of travel) so the strip always fills the full viewport width edge-to-edge.

## Deployment Notes

The site is a standard Next.js app and can be deployed to Vercel with zero config. For production:

1. Set up an email provider (Resend, SendGrid) and update `src/app/api/contact/route.ts` to send emails instead of logging to console.
2. Ensure `public/images/` assets are committed or served from a CDN.
