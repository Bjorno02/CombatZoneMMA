# Combat Zone MMA Website

Official website for Combat Zone MMA, New England's longest-running MMA promotion since 2000. Owned and operated by UFC fighter Calvin Kattar.

## Tech Stack

### Frontend

- **Framework:** React 19, TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** Radix UI, Lucide Icons
- **Routing:** Wouter
- **Forms:** React Hook Form + Zod validation
- **State:** TanStack Query
- **Animations:** Framer Motion

### Backend

- **Server:** Express.js, Node.js
- **Security:** Helmet (CSP, HSTS, etc.), CORS, Rate Limiting
- **Validation:** Zod schemas
- **Build:** Vite 7, esbuild

### Code Quality

- **Type Checking:** TypeScript strict mode
- **Formatting:** Prettier
- **Git Hooks:** Husky + lint-staged

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/combatzone-mma.git
cd combatzone-mma

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start development server
npm run dev
```

### Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server with hot reload |
| `npm run build`   | Build for production                     |
| `npm run start`   | Start production server                  |
| `npm run check`   | Run TypeScript type checking             |
| `npm run db:push` | Push database schema changes (Drizzle)   |
| `npm run prepare` | Set up Husky git hooks (runs on install) |

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── layout/     # Page layout (Navbar, Footer, PageLayout, etc.)
│   │   │   ├── ui/         # Base UI components (Button, Card, etc.)
│   │   │   ├── home/       # Homepage sections (Hero, About, Merch, etc.)
│   │   │   ├── events/     # Event components (CountdownTimer, etc.)
│   │   │   └── media/      # Media components (YouTubeFeed)
│   │   ├── data/           # Static data (events, sponsors)
│   │   ├── hooks/          # Custom hooks (useSEO, use-toast, etc.)
│   │   ├── lib/            # Utilities (constants, queryClient, utils)
│   │   ├── pages/          # Page components (route-level)
│   │   └── types/          # TypeScript type definitions
│   ├── public/             # Static files (favicon, robots.txt, sitemap.xml)
│   └── index.html          # HTML entry point
├── server/                 # Backend Express server
│   ├── index.ts            # Server entry point with security middleware
│   ├── routes.ts           # API routes (contact, YouTube)
│   ├── static.ts           # Static file serving (production)
│   └── vite.ts             # Vite dev server middleware
├── attached_assets/        # Images and static assets
├── .husky/                 # Git hooks (pre-commit)
└── SECURITY.md             # Security documentation
```

## Architecture

### Component Hierarchy

```
App
├── ErrorBoundary           # Catches and displays errors gracefully
├── QueryClientProvider     # TanStack Query for data fetching
└── Router
    └── PageLayout          # Common layout wrapper
        ├── SkipToContent   # Accessibility skip link
        ├── Navbar          # Navigation header
        ├── main            # Page content (id="main-content")
        └── Footer          # Site footer
```

### Key Components

- **`SectionHero`** - Consistent hero component for section pages (Events, Sponsors, etc.)
- **`PageHero`** - Generic hero component for standalone pages
- **`LazyImage`** - Image component with lazy loading and placeholders
- **`ErrorBoundary`** - Catches errors and shows recovery UI
- **`YouTubeFeed`** - Fetches and displays latest videos from Combat Zone channel

### Data Flow

- Static data lives in `client/src/data/` (events, sponsors)
- SEO configuration in `client/src/hooks/useSEO.ts`
- External URLs centralized in `client/src/lib/constants.ts`
- API endpoints defined in `server/routes.ts`

## Development Guidelines

### Code Style

- Use TypeScript strict mode
- Prefer functional components with hooks
- Use Tailwind CSS for styling (no CSS modules)
- Follow component naming: `PascalCase.tsx`

### Adding a New Page

1. Create page component in `client/src/pages/`
2. Add route in `client/src/App.tsx`
3. Add SEO config in `client/src/hooks/useSEO.ts`
4. Use `PageLayout` wrapper for consistent layout

```tsx
import { PageLayout } from "@/components/layout/PageLayout";
import { useSEO, SEO_CONFIG } from "@/hooks/useSEO";

export default function NewPage() {
  useSEO(SEO_CONFIG.newPage);

  return <PageLayout>{/* Page content */}</PageLayout>;
}
```

### Adding Section Subpages

For pages within a dropdown section (Events, Sponsors, etc.), use `SectionHero`:

```tsx
import { SectionHero } from "@/components/layout/SectionHero";

<SectionHero
  label="Section Label"
  title="PAGE\nTITLE"
  highlightWord="TITLE"
  description="Page description here"
  breadcrumbs={[{ label: "Parent", href: "/parent" }, { label: "Current Page" }]}
/>;
```

### Image Usage

Use `LazyImage` for better performance:

```tsx
import { LazyImage } from "@/components/ui/lazy-image";

<LazyImage
  src="/path/to/image.jpg"
  alt="Descriptive alt text"
  aspectRatio="16/9"
  placeholder="skeleton"
/>;
```

## Security

See [SECURITY.md](./SECURITY.md) for full details. Key measures:

- **HTTP Headers:** Helmet with CSP, HSTS, X-Frame-Options
- **Rate Limiting:** Per-endpoint rate limiting to prevent abuse
- **Input Validation:** Zod schemas on both client and server
- **XSS Prevention:** HTML sanitization on all user inputs
- **Error Handling:** Generic error messages in production (no stack traces)

## Accessibility

This site follows WCAG 2.1 Level AA guidelines:

- Skip-to-content link for keyboard navigation
- Semantic HTML structure with landmarks
- Focus-visible styles for keyboard users
- Alt text required on all images
- Color contrast meets AA standards

## Environment Variables

Create a `.env` file in the project root:

```env
# YouTube API (required for video feed)
YOUTUBE_API_KEY=your_google_api_key

# Optional: Override channel lookup
# YOUTUBE_CHANNEL_ID=UCxxxxxxxxxxxxxx

# Server
NODE_ENV=development
PORT=5000
```

**Important:** Never commit your `.env` file. It's already in `.gitignore`.

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in `dist/`:

- `dist/public/` - Static frontend assets
- `dist/index.cjs` - Node.js server bundle

### Run Production Server

```bash
npm run start
```

## Contributing

1. Create a feature branch from `main`
2. Make changes following code style guidelines
3. Ensure TypeScript checks pass (`npm run check`)
4. Submit a pull request with clear description

## License

MIT License - see LICENSE file for details.

---

**Combat Zone MMA** - Est. 2000 - New England's Premier MMA Promotion
