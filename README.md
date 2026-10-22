# Dongyun Kim — Developer Portfolio

A responsive React portfolio featuring Shilla Bakery, WeatherWear, and CryptoPulse, followed by an archive of applications and experiments.

## Development

Use Node.js 24 and npm. The application and Vercel Functions live in `my-app/`.

```sh
cd my-app
npm ci
npm start
```

## Verification

```sh
npm test -- --watchAll=false
npm run build
```

Routes: Home (`/`), Projects (`/project`), About (`/about`), Resume (`/resume`), and Contact (`/contact`). The `/projects` alias redirects to `/project`.

Project content, ordering, repository URLs, and demo links are maintained in `my-app/src/data/projects.js`. New product visuals for WeatherWear and CryptoPulse are interface illustrations, not live market or forecast data.

## Deployment

Connect this repository to Vercel with **Root Directory** set to `my-app`, build command `npm run build`, and output directory `build`. The included rewrites support direct navigation to application routes and retain the contact function.

Set `RESEND_API_KEY` in the hosting environment for contact form delivery. Without it the API returns an unavailable response and the form offers a direct email link. Local `npm start` serves the interface; email delivery requires the deployed Vercel function. Never commit API keys.

The original portfolio was adapted from [Soumyajit Behera’s Portfolio](https://github.com/soumyajit4419/Portfolio).
