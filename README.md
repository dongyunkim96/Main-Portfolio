# Dongyun Kim — Front-End Developer Portfolio

**Thoughtful design. Purposeful code.**

A personal portfolio showcasing responsive web applications, front-end engineering, and interface design with React and TypeScript.

### [Visit the portfolio ↗](https://dongyunkim.vercel.app/)

[Explore projects](https://dongyunkim.vercel.app/project) · [About me](https://dongyunkim.vercel.app/about) · [Resume](https://dongyunkim.vercel.app/resume) · [Contact](https://dongyunkim.vercel.app/contact)

## Featured projects

The homepage and unfiltered project archive present these projects first, in this order:

| Project | Overview | Live site | Source |
| --- | --- | --- | --- |
| **01 · Shilla Bakery** | A responsive bakery brand experience built with React, TypeScript, and Tailwind CSS. | [View site](https://shilla-bakery.vercel.app) | [View source](https://github.com/dongyunkim96/Shilla-Bakery) |
| **02 · WeatherWear** | A weather companion with outfit recommendations, commute layers, saved places, and trip packing lists. | [View site](https://weather-wear-coral.vercel.app) | [View source](https://github.com/dongyunkim96/WeatherWear) |
| **03 · CryptoPulse** | A cryptocurrency research dashboard with charts, asset search, a watchlist, and cached market data. | [View site](https://cryptopulse-snowy.vercel.app) | [View source](https://github.com/dongyunkim96/CryptoPulse) |

The complete archive contains **11 projects**, with filters for Applications, Web experiences, and Experiments. WeatherWear and CryptoPulse card visuals are interface illustrations; they do not display live forecast or market data.

## Design and user experience

- A consistent navy and mint visual system, readable typography, and responsive layouts.
- Large **View site** and **View source** buttons on both homepage cards and the project archive.
- Primary site buttons and outlined source buttons make the two destinations easy to distinguish. Projects without a demo feature a primary source button.
- Button targets are at least **48px tall**, with generous spacing and automatic wrapping when the card is narrow.
- Stationary cards, clear hover feedback, and visible keyboard focus make actions easier to select.
- External actions open in a new tab, with a visible note and project-specific accessible names.
- Mobile navigation, a skip-to-content link, reduced-motion support, and labeled contact fields.
- Lazy-loaded routes and images, page-specific titles, descriptive metadata, and a custom favicon.
- An embedded PDF resume with direct open and download options.

## Technology

| Area | Tools |
| --- | --- |
| UI | React 18, JavaScript, CSS |
| Navigation | React Router 6 |
| Icons | React Icons |
| Build | Create React App / react-scripts |
| Tests | Jest, React Testing Library |
| Contact | Vercel Functions, Resend |
| Hosting | Vercel |

The portfolio itself uses JavaScript. Individual showcased applications also use TypeScript and other tools listed on their cards.

## Technical experience across projects

The homepage and About page share six skill groups, with related projects listed on each card. These describe project experience rather than proficiency ratings.

| Area | Technologies used |
| --- | --- |
| Languages & foundations | JavaScript, TypeScript, HTML, CSS, React |
| UI & interaction | Tailwind CSS, Material UI, Emotion, Motion / Framer Motion, Radix UI, TradingView Lightweight Charts |
| State & API integration | React Router, Redux Toolkit, Zustand, TanStack Query, REST APIs, Zod |
| Server & data | Node.js, Vercel Functions, Upstash Redis, Resend, Cloudflare Workers, SQLite / Durable Objects |
| Testing & code quality | Vitest, Jest, React Testing Library, Playwright, ESLint, Prettier |
| Build & delivery | Git, GitHub, npm, Vite, Vercel, Wrangler |

Cloudflare Workers and SQLite / Durable Objects refer to CryptoPulse’s alternative backend; its current deployment uses Vercel Functions and Upstash Redis. Playwright appears in Shilla Bakery’s end-to-end test tooling. Tool presence does not imply that every deployment or browser check has been independently verified.

Skill content is maintained in `my-app/src/data/skills.js`; the shared presentation is in `my-app/src/components/Skills.js`.

## Run locally

Use **Node.js 24** and npm. From the repository root:

```sh
cd my-app
npm ci
npm start
```

Open the local address printed by the development server, normally [localhost:3000](http://localhost:3000).

## Build and test

Run from `my-app/`:

```sh
npm run build
node node_modules/react-scripts/scripts/test.js --watchAll=false --runInBand
```

The existing tests cover featured project order, project filtering, mobile menu state, and contact failure recovery. Browser-based visual checks and actual email delivery require separate verification.

## Routes

| Page | Route |
| --- | --- |
| Home | `/` |
| Projects | `/project` |
| About | `/about` |
| Resume | `/resume` |
| Contact | `/contact` |

`/projects` redirects to `/project`.

## Project structure

```text
my-app/
├── api/contact.js                     # Contact form function
├── public/                            # Favicon, metadata, and resume PDF
├── src/
│   ├── App.js                         # Routing and page titles
│   ├── App.test.js                    # User-flow regression checks
│   ├── components/
│   │   ├── Home/                      # Introduction and featured projects
│   │   ├── Projects/                  # Archive, cards, and action styles
│   │   ├── About/
│   │   ├── Resume/
│   │   └── Contact/
│   ├── data/projects.js               # Project order, copy, and links
│   └── style.css                      # Shared design system
└── vercel.json                        # SPA and API routing
```

To update project content, edit `my-app/src/data/projects.js`. Keep featured entries first; the homepage uses the first three items. Project button styling lives in `my-app/src/components/Projects/ProjectActions.css`.

## Deployment and contact

The public portfolio is available at **[dongyunkim.vercel.app](https://dongyunkim.vercel.app/)**.

For Vercel, set the root directory to `my-app`, the build command to `npm run build`, and the output directory to `build`. The included rewrites support direct navigation to application routes while retaining API routing.

Configure `RESEND_API_KEY` in the hosting environment to enable email delivery. Without it, the API reports that the service is unavailable; the interface retains the visitor’s message and offers a direct email link. Local `npm start` serves the interface; email delivery requires the deployed function. Never commit API keys.

Contact: [dongyunkim96@gmail.com](mailto:dongyunkim96@gmail.com) · [GitHub](https://github.com/dongyunkim96) · [LinkedIn](https://linkedin.com/in/dongyun-kim-363487272/)

