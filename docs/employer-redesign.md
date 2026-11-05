# Employer-facing portfolio redesign

## Purpose

Make the developer’s capabilities assessable through actual interfaces, source access, and specific implementation decisions. Keep existing project order, including PALETTE immediately after Shilla Bakery. No employment history, seniority, commercial adoption, or business-impact numbers were invented.

## Information and visual design

- Show the developer’s name, React/TypeScript focus, real application imagery, selected work, resume, source profile, and contact access in the hero.
- Put selected projects before the longer skills inventory. Retain all 16 archive projects and the eight featured entries in their established order.
- Use two leading project cards followed by smaller image-and-copy cards on desktop; stack them on mobile.
- Add four engineering case studies: context, implementation scope, architecture, problem/approach/tradeoff, verification evidence, limitations, and a guided demo walkthrough.
- Link the skills evidence directly to available internal case studies. Include current Next.js, SvelteKit, tRPC, Neon, PostgreSQL, PGlite, SVG, and motion experience alongside React/TypeScript.
- Preserve both themes, contact failure recovery, resume access, keyboard controls, and reduced-motion preferences. Entrance animation is short and enabled only when reduced motion is not requested.

The Sites presentation-led design guidance informed the sequence and use of real artifacts. [NN/g’s portfolio guide](https://www.nngroup.com/articles/ux-design-portfolios/) informed the addition of context and case-study narratives. [web.dev’s motion guidance](https://web.dev/learn/accessibility/motion) informed reduced-motion handling. These sources informed presentation choices; they do not establish hiring outcomes.

## Evidence boundaries

Case studies summarize existing project documentation and implementations. HealthCareKim’s recorded hosted/SQL checks are attributed to that project’s verification record. CONVENE has no newly claimed load or concurrency benchmark. SPACEFIT links its QA record. PALETTE links its 13 domain/asset tests and documented hosting limitation. This portfolio update does not rerun those applications’ complete suites or establish their production readiness.

## Verification

- Production compilation passed after the final source changes.
- 15 Jest/React Testing Library tests passed: existing project order, category filtering, mobile navigation, contact failure recovery, theme behavior, four case-study pages/actions, and unknown-case recovery.
- The worktree’s Windows path required an explicit test glob: `node node_modules/react-scripts/scripts/test.js --watchAll=false --runInBand --testMatch "**/src/**/*.test.js"`.
- Local Chromium browser inspection covered the home at 1280, 768, and 390 CSS pixels, both themes, mobile navigation, the Web experiences filter, and case-study navigation. Inspected document widths did not overflow.
- The filtered order was STILLROOM → Shilla Bakery → PALETTE, and the mobile menu closed after route selection.
- The PALETTE case page was inspected at mobile width. HealthCareKim’s case page rendered with its correct title and section anchors on desktop. No broken homepage images were observed at mobile width.
- Screenshots are in `docs/screenshots/`. They are local preview captures, not proof of a hosted deployment.

The existing Create React App dependency notices and React Testing Library `act` deprecation warning remain. No dependency migration was included. Automated accessibility certification, physical-device testing, broad cross-browser testing, live email delivery, and load benchmarks are outside these checks.
