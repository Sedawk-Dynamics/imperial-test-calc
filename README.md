# Imperial Healthcare Systems

A next-generation healthcare SaaS platform for **Revenue Cycle Management (RCM)** and financial analytics, built with Next.js 16, React 19, and TypeScript.

Imperial delivers enterprise-grade RCM powered by the proprietary **IRRF framework** to help healthcare providers achieve 99% clean claims rates, up to 60% cost reduction, and measurable Clinical EBITDA growth.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [API Endpoints](#api-endpoints)
- [Pages & Routes](#pages--routes)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [License](#license)

---

## Tech Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js 16.0.10 (App Router) |
| **Language** | TypeScript 5.x |
| **UI Library** | React 19.2.0 |
| **Styling** | Tailwind CSS 4.1.9 |
| **Component System** | shadcn/ui + Radix UI (20+ packages) |
| **Animations** | Framer Motion 11.11.0, Lottie React |
| **Charts** | Recharts 2.15.4 |
| **AI Chatbot** | OpenAI API (GPT-4.1-mini) |
| **CMS** | Ghost Content API |
| **PDF Generation** | jsPDF 2.5.2 |
| **Email** | Nodemailer 7.0.12 |
| **Form Handling** | React Hook Form + Zod validation |
| **Icons** | Lucide React |
| **Analytics** | Vercel Analytics |

---

## Features

### Interactive ROI Calculator
- Organization type selection (Clinic / Hospital)
- Inputs for Annual Gross Charges, Net Collections, AR Days, Clean Claim Rate, Denial Rate, Staff Count, and Cost per Staff
- Three calculation engines: Revenue Leakage Recovery, RCM Cost Savings, Cash Released from AR
- Downloadable PDF financial reports

### AI-Powered Chatbot (Imperia.ai)
- Floating chatbot widget with OpenAI GPT integration
- Smart contact intent detection (routes to phone, email, or contact form)
- Contextual responses about RCM and healthcare services

### Blog Integration
- Ghost CMS-powered blog with dynamic content
- Featured post showcase, tag categorization, and author metadata
- SEO-optimized with reading time estimates

### UI/UX
- Fully responsive mobile-first design
- Dark mode support
- Scroll-based reveal animations and page transitions
- Interactive carousels (Performance Ledger, Services, Products)
- Customer journey visualization map

### Forms & Lead Generation
- Contact form modal with file upload
- RCM audit/discovery form with PDF validation
- Multi-field validation with Zod schemas

---

## Project Structure

```
imperial-test-calc/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Home (ROI calculator + landing)
│   ├── layout.tsx                # Root layout with metadata
│   ├── globals.css               # Global styles & theme variables
│   ├── loading.tsx               # Loading skeleton
│   ├── api/
│   │   └── chat/route.ts         # Chatbot API endpoint
│   ├── about/page.tsx            # About page
│   ├── services/page.tsx         # Services page
│   ├── solutions/page.tsx        # Solutions page
│   ├── blog/
│   │   ├── page.tsx              # Blog listing
│   │   └── [slug]/page.tsx       # Individual blog posts
│   ├── careers/page.tsx          # Careers page
│   ├── privacy-policy/page.tsx   # Privacy policy
│   ├── terms-of-service/page.tsx # Terms of service
│   └── hipaa-soc2-ready/page.tsx # Compliance page
│
├── components/                   # React components
│   ├── Chatbot.tsx               # AI chatbot widget
│   ├── site-header.tsx           # Navigation header
│   ├── site-footer.tsx           # Footer
│   ├── contact-form-modal.tsx    # Contact form
│   ├── rcm-audit-modal.tsx       # RCM audit form
│   ├── sequential-hero-animation.tsx
│   ├── imperial-journey-map.tsx
│   ├── performance-ledger-carousel.tsx
│   ├── product-carousel.tsx
│   ├── services-carousel.tsx
│   ├── FlipCard.tsx
│   ├── theme-provider.tsx
│   └── ui/                       # shadcn/ui components (60+)
│
├── lib/                          # Utilities
│   ├── utils.ts                  # Helper functions
│   ├── contact.ts                # Contact info constants
│   └── ghost.ts                  # Ghost CMS API client
│
├── hooks/                        # Custom React hooks
│   ├── use-toast.ts              # Toast notifications
│   └── use-mobile.ts             # Mobile detection
│
├── public/                       # Static assets
│   ├── images/                   # Logos, team photos, social icons
│   ├── animations/               # Lottie JSON files
│   ├── case-studies/             # PDF documents
│   ├── robots.txt
│   └── sitemap.xml
│
├── styles/                       # Additional styles
│   └── globals.css
│
├── package.json
├── tsconfig.json
├── next.config.mjs
├── postcss.config.mjs
├── components.json               # shadcn/ui config
└── .gitignore
```

---

## Getting Started

### Prerequisites

- **Node.js** 18.x or later
- **npm**, **pnpm**, or **yarn**

### Installation

1. **Clone the repository:**

```bash
git clone <repository-url>
cd imperial-test-calc
```

2. **Install dependencies:**

```bash
# Using npm
npm install

# Using pnpm (recommended)
pnpm install

# Using yarn
yarn install
```

3. **Set up environment variables:**

Create a `.env.local` file in the project root (see [Environment Variables](#environment-variables) below).

4. **Run the development server:**

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

5. **Open the app:**

Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
# OpenAI API (required for Imperia.ai chatbot)
OPENAI_API_KEY=sk-your-openai-api-key

# Ghost CMS (required for blog)
NEXT_PUBLIC_GHOST_API_URL=https://your-ghost-instance.com
NEXT_PUBLIC_GHOST_CONTENT_KEY=your-ghost-content-key

# Google Generative AI (optional)
GOOGLE_API_KEY=your-google-api-key
```

| Variable | Required | Description |
|---|---|---|
| `OPENAI_API_KEY` | Yes (for chatbot) | OpenAI API key for GPT-4.1-mini chatbot |
| `NEXT_PUBLIC_GHOST_API_URL` | Yes (for blog) | Ghost CMS instance URL |
| `NEXT_PUBLIC_GHOST_CONTENT_KEY` | Yes (for blog) | Ghost Content API key |
| `GOOGLE_API_KEY` | No | Google Generative AI API key |

> **Note:** Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Never prefix sensitive keys with `NEXT_PUBLIC_`.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server on `localhost:3000` |
| `npm run build` | Create an optimized production build |
| `npm start` | Start the production server |
| `npm run lint` | Run ESLint to check code quality |

---

## API Endpoints

### POST `/api/chat`

AI chatbot endpoint powered by OpenAI.

**Request:**
```json
{
  "message": "What RCM services do you offer?"
}
```

**Response:**
```json
{
  "reply": "Imperial Healthcare Systems offers comprehensive RCM services..."
}
```

---

## Pages & Routes

| Route | Description |
|---|---|
| `/` | Home page with ROI calculator, hero animations, and product showcases |
| `/about` | Company history, mission, team, and values |
| `/services` | Detailed service offerings (RCM, operations, analytics) |
| `/solutions` | Comprehensive problem-solution framework |
| `/blog` | Blog listing powered by Ghost CMS |
| `/blog/[slug]` | Individual blog post |
| `/careers` | Job listings and recruitment |
| `/privacy-policy` | Privacy policy |
| `/terms-of-service` | Terms of service |
| `/hipaa-soc2-ready` | HIPAA & SOC2 compliance information |

---

## Configuration

### TypeScript (`tsconfig.json`)
- Strict mode enabled
- ES6 target with ES Next modules
- Path alias: `@/*` maps to the project root

### Next.js (`next.config.mjs`)
- TypeScript build errors are ignored during build
- Image optimization is disabled (unoptimized mode)

### Tailwind CSS
- Version 4.x with PostCSS plugin
- OKLch color space for theme variables
- Dark mode support via `.dark` class

### shadcn/ui (`components.json`)
- New York style variant
- React Server Components enabled
- Lucide icon library
- Neutral base color

---

## Deployment

This project is configured for **Vercel** deployment (recommended for Next.js):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket).
2. Import the project on [vercel.com](https://vercel.com).
3. Add the required environment variables in the Vercel dashboard.
4. Deploy.

For other platforms, build the project and start the production server:

```bash
npm run build
npm start
```

---

## License

This is a private project. All rights reserved.
