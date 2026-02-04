# Combat Zone MMA Website

Official website for Combat Zone MMA, New England's longest-running MMA promotion since 2000. Owned and operated by UFC fighter Calvin Kattar.

## Tech Stack

### Frontend

- **Framework:** React 19, TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** Radix UI, shadcn/ui, Lucide Icons
- **Routing:** Wouter
- **Forms:** React Hook Form + Zod validation
- **State:** TanStack Query
- **Animations:** Framer Motion
- **Build:** Vite 7

### Backend (Vercel Serverless)

- **Runtime:** Vercel Serverless Functions
- **Validation:** Zod schemas
- **Rate Limiting:** In-memory rate limiting

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
git clone https://github.com/Bjorno02/CombatZoneMMA.git
cd CombatZoneMMA

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
# Edit .env and add your YouTube API key

# Start development server
npm run dev
```

### Available Scripts

| Command                | Description                           |
| ---------------------- | ------------------------------------- |
| `npm run dev`          | Start local Express dev server        |
| `npm run dev:client`   | Start Vite dev server (frontend only) |
| `npm run build`        | Build full app (server + client)      |
| `npm run build:client` | Build frontend only (for Vercel)      |
| `npm run start`        | Start production Express server       |
| `npm run check`        | Run TypeScript type checking          |

## Project Structure

```
├── api/                    # Vercel serverless functions
│   ├── contact.ts          # Contact form handler
│   └── youtube/
│       └── videos.ts       # YouTube feed handler
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── layout/     # Page layout (Navbar, Footer, etc.)
│   │   │   ├── ui/         # Base UI components (Button, Card, etc.)
│   │   │   └── home/       # Homepage sections
│   │   ├── data/           # Static data (events, sponsors)
│   │   ├── hooks/          # Custom hooks (useSEO, use-toast)
│   │   ├── lib/            # Utilities (constants, queryClient)
│   │   ├── pages/          # Page components (route-level)
│   │   └── types/          # TypeScript type definitions
│   ├── public/             # Static files (images, favicon, etc.)
│   └── index.html          # HTML entry point
├── server/                 # Express server (for local development)
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API routes
│   └── static.ts           # Static file serving
├── vercel.json             # Vercel deployment configuration
└── SECURITY.md             # Security documentation
```

## Deployment

This site is deployed on **Vercel**.

### How It Works

- Frontend is built with Vite and served as static files
- API routes (`/api/contact`, `/api/youtube/videos`) are Vercel serverless functions
- The Express server in `/server` is for local development only

### Deploy to Vercel

1. Push to GitHub
2. Connect repo to Vercel
3. Add environment variables in Vercel dashboard:
   - `YOUTUBE_API_KEY` - Your Google API key

Vercel auto-deploys on every push to `main`.

### Local Development

For local development, you can use the Express server which mimics the production setup:

```bash
npm run dev
```

Or run just the frontend with Vite:

```bash
npm run dev:client
```

## Environment Variables

Create a `.env` file in the project root:

```env
# YouTube API (required for video feed)
YOUTUBE_API_KEY=your_google_api_key

# Optional: Override channel lookup
# YOUTUBE_CHANNEL_ID=UCxxxxxxxxxxxxxx

# Environment
NODE_ENV=development
```

**Important:** Never commit your `.env` file. It's already in `.gitignore`.

## Development Guidelines

### Code Style

- Use TypeScript strict mode
- Prefer functional components with hooks
- Use Tailwind CSS for styling
- Follow component naming: `PascalCase.tsx`

### Adding a New Page

1. Create page component in `client/src/pages/`
2. Add route in `client/src/App.tsx`
3. Add SEO config in `client/src/hooks/useSEO.ts`
4. Add to `client/public/sitemap.xml`
5. Use `PageLayout` wrapper for consistent layout

```tsx
import { PageLayout } from "@/components/layout/PageLayout";
import { useSEO, SEO_CONFIG } from "@/hooks/useSEO";

export default function NewPage() {
  useSEO(SEO_CONFIG.newPage);

  return <PageLayout>{/* Page content */}</PageLayout>;
}
```

## Security

See [SECURITY.md](./SECURITY.md) for details. Key measures:

- Input validation with Zod schemas
- XSS prevention via HTML sanitization
- Rate limiting on API endpoints
- Environment variables for secrets

## Accessibility

This site follows WCAG 2.1 Level AA guidelines:

- Skip-to-content link for keyboard navigation
- Semantic HTML structure
- Focus-visible styles for keyboard users
- Alt text on all images

## License

MIT License

---

**Combat Zone MMA** - Est. 2000 - New England's Premier MMA Promotion
