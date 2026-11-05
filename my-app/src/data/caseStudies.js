// Narratives summarize implemented behavior; business-impact metrics are not inferred.
export const caseStudies = {
  "healthcarekim": {
    "focus": "Full-stack workflow engineering",
    "summary": "A clinic operations workspace connecting case triage, assignment, appointments, and audit history while isolating each visitor’s synthetic demo.",
    "context": "Coordinators need to understand what changed, who owns the next step, and whether their edit is still current. A successful form submission is only one part of that workflow.",
    "contributions": "Interface design, typed API workflows, SQL persistence, clinic and role boundaries, conflict recovery, and regression verification.",
    "decisionTitle": "Two people edit the same record. What survives?",
    "decisionSummary": "Expected-version checks reject stale writes while preserving the draft, so a refresh does not mean losing the user’s work.",
    "decisions": [
      {
        "title": "Keep writes and history together",
        "problem": "A case update without its corresponding activity history creates an incomplete operational record.",
        "approach": "Case mutations, notes, and audit events share a connection-bound SQL transaction. Clinic-scoped checks and composite foreign keys define the data boundary.",
        "tradeoff": "Domain behavior moves into service and database layers, but the interface receives one coherent result rather than coordinating partial saves."
      },
      {
        "title": "Make stale edits recoverable",
        "problem": "Another browser tab can submit an older version of a case.",
        "approach": "Expected-version checks return a conflict instead of overwriting the newer record. The interface retains the draft and offers refresh and retry.",
        "tradeoff": "Conflicts require an explicit recovery step. Last-write-wins would appear simpler while silently discarding changes."
      },
      {
        "title": "Enforce booking rules below the form",
        "problem": "Requests can compete for the same staff member’s appointment slot.",
        "approach": "Server-side overlap and business-hour validation is backed by PostgreSQL constraints and corresponding local SQLite rules. Clinic-local input is stored as UTC timestamps.",
        "tradeoff": "Both database paths need verification; adapter compatibility alone does not establish matching behavior."
      }
    ],
    "flow": [
      "Responsive workspace",
      "tRPC + role checks",
      "Domain transaction",
      "Neon PostgreSQL"
    ],
    "verification": "The project’s recorded verification includes domain tests, embedded PostgreSQL tests, hosted Vercel + Neon workflows, and competing HTTP writes. Its README distinguishes these checks from sustained-load testing.",
    "scope": "Fictional clinics, selectable demo personas, and expiring visitor workspaces. This is a portfolio demonstration, not clinical software or a compliance-certified service.",
    "walkthrough": [
      "Enter a clinic demo and assign a case.",
      "Change its status and inspect the activity history.",
      "Edit the same case in two tabs to explore stale-draft recovery."
    ],
    "evidenceLabel": "Architecture & verification record",
    "evidenceUrl": "https://github.com/dongyunkim96/HealthCareKim#testing-and-verification"
  },
  "convene": {
    "focus": "Transactional application workflows",
    "summary": "A conference platform connecting attendee registration, reservations, personal schedules, and QR passes with organizer check-in and reporting.",
    "context": "A reservation affects capacity, personal schedules, waitlist order, and the organizer’s view of the same event. Those perspectives need a consistent underlying record.",
    "contributions": "SvelteKit application workflows, attendee and organizer interfaces, typed data models, shared SQL persistence, reservation rules, and waitlist behavior.",
    "decisionTitle": "One remaining seat. More than one request.",
    "decisionSummary": "Transactional bookings and FIFO waitlist promotion connect capacity changes to attendee and organizer views.",
    "decisions": [
      {
        "title": "Treat reservations as shared state",
        "problem": "Capacity and schedules must remain consistent as reservations change.",
        "approach": "Reservation workflows use transactional SQL updates in Neon instead of browser-local seat counts.",
        "tradeoff": "The interface must handle server decisions and unavailable capacity rather than treating every click as a guaranteed booking."
      },
      {
        "title": "Connect released seats to a queue",
        "problem": "A cancellation needs a predictable next recipient for its seat.",
        "approach": "FIFO waitlist promotion connects availability changes to a defined waiting order.",
        "tradeoff": "Waiting and reserved states add domain complexity, but make the resulting behavior explainable."
      },
      {
        "title": "Carry the workflow through the event",
        "problem": "Booking alone leaves organizers with disconnected entry and attendance tasks.",
        "approach": "Personal schedules and QR passes connect attendee preparation with organizer check-in and CSV reporting.",
        "tradeoff": "Shared records need clear representation across multiple perspectives."
      }
    ],
    "flow": [
      "Attendee / organizer UI",
      "SvelteKit server",
      "Reservation transaction",
      "Neon PostgreSQL"
    ],
    "verification": "Implementation details and project-specific verification are documented in the source repository. This portfolio does not claim an independent concurrency or load benchmark for CONVENE.",
    "scope": "A portfolio conference platform. Workflow capabilities do not establish real event attendance or commercial usage.",
    "walkthrough": [
      "Explore attendee registration and the session catalog.",
      "Compare a personal schedule with reservation and waitlist states.",
      "Inspect the organizer check-in and reporting workflow."
    ],
    "evidenceLabel": "Implementation documentation",
    "evidenceUrl": "https://github.com/dongyunkim96/Convene#readme"
  },
  "spacefit": {
    "focus": "Interactive frontend systems",
    "summary": "A real-dimension 2D room planner connecting an architectural brand experience with an SVG editor, furniture controls, and saved layouts.",
    "context": "A room can look convincing while being dimensionally wrong. Measurements need to remain meaningful as the visitor moves, rotates, and saves furniture.",
    "contributions": "Product structure, responsive design, SVG rendering, editor state, undo/redo behavior, guest persistence, and Firebase integration.",
    "decisionTitle": "Move a sofa. Keep the room model consistent.",
    "decisionSummary": "A dimension-based model connects SVG interactions, undo/redo, and saved layouts so the editor and its previews describe the same room.",
    "decisions": [
      {
        "title": "Keep dimensions in the model",
        "problem": "A visual position alone cannot explain whether furniture fits in a room.",
        "approach": "A shared dimension-based model drives the SVG editor and previews. Zustand coordinates the editing state.",
        "tradeoff": "Geometry needs more care than a decorative drag interaction, but the model stays meaningful outside the current viewport."
      },
      {
        "title": "Make exploration reversible",
        "problem": "Visitors need to compare arrangements without losing an earlier layout.",
        "approach": "Undo/redo and reusable rendering support arranging, comparing, and returning to previous choices.",
        "tradeoff": "Editor history must remain separate from the current selection and persisted project."
      },
      {
        "title": "Let the first interaction happen without signup",
        "problem": "An account gate interrupts a visitor testing a room arrangement.",
        "approach": "Guest projects save in the browser; configured Firebase integration provides account-specific cloud storage.",
        "tradeoff": "Browser drafts and cloud records have different persistence boundaries. A frontend deployment alone does not enable Firebase services."
      }
    ],
    "flow": [
      "Editor controls",
      "Zustand room model",
      "SVG + history",
      "Guest drafts / Firebase"
    ],
    "verification": "The repository includes a dedicated QA record and documentation of planner data, persistence, and conflict recovery. Those records identify the project-specific checks actually performed.",
    "scope": "A 2D planning tool. Guest data belongs to the browser; cloud accounts require the project’s Firebase configuration.",
    "walkthrough": [
      "Choose Explore a demo without registering.",
      "Move and rotate furniture, then compare dimensions.",
      "Undo a change and reload to inspect the saved guest layout."
    ],
    "evidenceLabel": "Planner QA record",
    "evidenceUrl": "https://github.com/dongyunkim96/SpaceFit/blob/main/QA.md"
  },
  "palette": {
    "focus": "Product discovery & interface craft",
    "summary": "A 60-product café catalog with URL-based discovery, configurable option prices, saved favorites, and a visual three-flavor gelato builder.",
    "context": "A brand experience still needs to answer practical questions: how can visitors compare products, understand option prices, and return to a combination without starting over?",
    "contributions": "Editorial design, responsive discovery, typed catalog logic, local persistence, reduced-motion interactions, generated imagery preparation, and regression tests.",
    "decisionTitle": "Separate browsing state from personal choices.",
    "decisionSummary": "Filters live in the URL; favorites and tasting choices use validated browser storage. Each state has a clear navigation and persistence boundary.",
    "decisions": [
      {
        "title": "Make discovery navigable",
        "problem": "Opening a product should not reset the search and filters that led to it.",
        "approach": "Query parameters hold search, category, badges, sort, and page. Return links preserve discovery context.",
        "tradeoff": "URL values need normalization and page clamping, but navigation can reflect the visitor’s actual search state."
      },
      {
        "title": "Define rules outside the component",
        "problem": "Prices, selection limits, and ratings can diverge when every view calculates them separately.",
        "approach": "Pure typed functions calculate integer-cent prices, enforce three distinct flavors, and separate café and product review aggregates.",
        "tradeoff": "These are local-first catalog functions, not an ordering backend or public review service."
      },
      {
        "title": "Keep the visual detail easy to compare",
        "problem": "Oversized sections and decorative illustrations made the catalog harder to scan.",
        "approach": "Compact grids and bounded widths pair with responsive local WebP photography. Entrances and selection transitions respect reduced motion.",
        "tradeoff": "Generated photography needs provenance and demo labeling; it does not establish real product appearance."
      }
    ],
    "flow": [
      "URL filters + React UI",
      "Pure TypeScript logic",
      "Shared React state",
      "Validated localStorage"
    ],
    "verification": "13 Vitest tests cover catalog/assets, discovery, option prices, selection limits, storage recovery, and rating aggregation. The README also records the observed direct-route hosting limitation.",
    "scope": "A frontend concept with AI-generated imagery and sample reviews. No checkout, backend, public review service, or contact delivery is implemented.",
    "walkthrough": [
      "Start at the homepage and choose Explore the Menu.",
      "Filter products, open a detail, and return to the previous results.",
      "Build a palette, save a favorite, and refresh to inspect local persistence."
    ],
    "evidenceLabel": "Tests, imagery & deployment notes",
    "evidenceUrl": "https://github.com/dongyunkim96/PaletteCafe#testing-and-verification"
  }
};
