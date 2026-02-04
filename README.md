# Combat Zone MMA

Official website for Combat Zone MMA, New England's longest-running MMA promotion since 2000. Owned and operated by UFC fighter Calvin Kattar.

## Tech Stack

**Frontend:** React 19, TypeScript, Tailwind CSS 4, Vite 7
**UI:** Radix UI, shadcn/ui, Lucide Icons, Framer Motion
**Routing:** Wouter
**Forms:** React Hook Form + Zod
**Data Fetching:** TanStack Query
**Backend:** Vercel Serverless Functions
**Code Quality:** TypeScript strict mode, Prettier, Husky

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
git clone https://github.com/Bjorno02/CombatZoneMMA.git
cd CombatZoneMMA
npm install
cp .env.example .env
npm run dev
```

### Scripts

| Command                | Description                     |
| ---------------------- | ------------------------------- |
| `npm run dev`          | Local Express dev server        |
| `npm run dev:client`   | Vite dev server (frontend only) |
| `npm run build:client` | Build frontend for Vercel       |
| `npm run check`        | TypeScript type checking        |

## Project Structure

```
├── api/                      # Vercel serverless functions
│   ├── contact.ts            # Contact form handler
│   └── youtube/videos.ts     # YouTube feed API
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── home/         # Homepage sections
│   │   │   ├── layout/       # Navbar, Footer, PageLayout
│   │   │   ├── media/        # YouTubeFeed
│   │   │   └── ui/           # shadcn/ui components
│   │   ├── data/             # Static data (events, sponsors)
│   │   ├── hooks/            # useSEO, use-toast
│   │   ├── lib/              # Utils, constants, queryClient
│   │   ├── pages/            # Route components
│   │   └── types/            # TypeScript definitions
│   └── public/               # Static assets
├── server/                   # Express server (local dev only)
├── vercel.json               # Vercel config + security headers
└── SECURITY.md
```

## Deployment

Deployed on **Vercel** as a static site with serverless API functions.

### Deploy

1. Push to GitHub
2. Connect repo to Vercel
3. Add environment variable: `YOUTUBE_API_KEY`

Auto-deploys on push to `main`.

## Environment Variables

```env
# Required for video feed
YOUTUBE_API_KEY=your_google_api_key

# Optional
YOUTUBE_CHANNEL_ID=UCxxxxxxxxxxxxxx
NODE_ENV=development
PORT=5000
```

## Adding a New Page

1. Create component in `client/src/pages/`
2. Add route in `client/src/App.tsx`
3. Add SEO config in `client/src/hooks/useSEO.ts`
4. Add to `client/public/sitemap.xml`

```tsx
import { PageLayout } from "@/components/layout/PageLayout";
import { useSEO, SEO_CONFIG } from "@/hooks/useSEO";

export default function NewPage() {
  useSEO(SEO_CONFIG.newPage);
  return <PageLayout>{/* content */}</PageLayout>;
}
```

## Security

Security headers configured in `vercel.json`:

- Content-Security-Policy
- Strict-Transport-Security
- X-Content-Type-Options
- X-Frame-Options
- Referrer-Policy

API security:

- Zod input validation
- XSS sanitization
- Rate limiting

See [SECURITY.md](./SECURITY.md) for details.

## License

MIT

---

**Combat Zone MMA** · Est. 2000 · New England's Premier MMA Promotion
