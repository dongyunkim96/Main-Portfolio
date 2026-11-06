import formlab from "../Assets/FormLab.webp";
import healthcarekim from "../Assets/HealthCareKim.png";
import convene from "../Assets/Convene.png";
import spacefit from "../Assets/Spacefit.png";
import stillroom from "../Assets/StillRoom.jpg";
import shilla from "../Assets/ShillaBakery.png";
import palette from "../Assets/Palette.jpg";
import snacks from "../Assets/KoreanSnacks.png";
import easyMart from "../Assets/EasyMart.png";
import notes from "../Assets/StickyNotes.png";
import stack from "../Assets/StackOverflow.png";
import javascript from "../Assets/JavaScriptPractice.jpeg";
import css from "../Assets/CssPractice.jpeg";
import dongtube from "../Assets/Dongtube.png";
import algorithms from "../Assets/AlgorithmStudy.png";

export const projects = [
  {
    id: "healthcarekim", title: "HealthCareKim", category: "Applications", label: "CLINIC OPERATIONS · FULL-STACK NEXT.JS",
    image: healthcarekim, featured: true,
    description: "A multi-clinic operations workspace connecting case triage, team assignments, appointments, and audit history. Role-based access and transactional writes keep each visitor's isolated synthetic demo consistent in Neon PostgreSQL.",
    highlights: ["Version-safe case edits, notes & audit history", "Clinic-scoped roles & conflict-aware appointment scheduling"],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "tRPC", "PostgreSQL", "Neon"],
    ghLink: "https://github.com/dongyunkim96/HealthCareKim", demoLink: "https://health-care-kim.vercel.app/"
  },
  {
    id: "convene", title: "CONVENE", category: "Applications", label: "CONFERENCE PLATFORM · FULL-STACK SVELTE",
    image: convene, featured: true,
    description: "A full-stack conference platform connecting attendee registration, session reservations, personal schedules, and QR passes. Transactional bookings and waitlist promotions keep attendee and organizer views consistent in a shared Neon database.",
    highlights: ["Conflict-aware reservations & FIFO waitlist promotion", "QR passes, organizer check-in & CSV reporting"],
    techStack: ["Svelte", "SvelteKit", "TypeScript", "Tailwind CSS", "PostgreSQL", "Neon"],
    ghLink: "https://github.com/dongyunkim96/Convene", demoLink: "https://convene-coral-six.vercel.app"
  },
  {
    id: "spacefit", title: "SPACEFIT", category: "Applications", label: "INTERACTIVE SPACE PLANNING",
    image: spacefit, featured: true,
    description: "A dimension-based 2D home layout planner that connects a thoughtful brand experience with an interactive SVG editor. Arrange furniture, explore layouts, and save personal spaces with guest drafts or Firebase accounts.",
    highlights: ["Real-dimension SVG editing with undo & redo", "Browser drafts & account-specific cloud storage"],
    techStack: ["React", "TypeScript", "SVG", "Zustand", "Firebase"],
    ghLink: "https://github.com/dongyunkim96/SpaceFit", demoLink: "https://space-fit-six.vercel.app/"
  },
  {
    id: "stillroom", title: "STILLROOM", category: "Web experiences", label: "HOME FRAGRANCE · DEMO COMMERCE",
    image: stillroom, featured: true,
    description: "An editorial home fragrance storefront with 24 products, a five-step scent finder, and a complete demo shopping journey. Explore scents by mood, choose gift details, and create a local demo order without payment.",
    highlights: ["Deterministic scent matching & URL-based filters", "Stock-aware bag, gift wrapping & demo checkout"],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Motion", "Radix UI", "Vite"],
    ghLink: "https://github.com/dongyunkim96/StillRoom", demoLink: "https://still-room-five.vercel.app/"
  },
  {
    id: "shilla", title: "Shilla Bakery", category: "Web experiences", label: "BAKERY & BRAND EXPERIENCE",
    image: shilla, featured: true,
    description: "A warm, responsive digital storefront for a bakery. Reusable components and clear navigation bring the brand experience from desktop to mobile.",
    highlights: ["Responsive brand experience", "Reusable component architecture"],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    ghLink: "https://github.com/dongyunkim96/Shilla-Bakery", demoLink: "https://shilla-bakery.vercel.app"
  },
  {
    id: "palette", title: "PALETTE", category: "Web experiences", label: "GELATO CAFÉ · INTERACTIVE CATALOG",
    image: palette, featured: true,
    description: "A photo-led café experience with 60 gelato, drink, and bakery products. URL-based discovery, configurable prices, and a three-flavor gelato builder turn a compact editorial design into an interactive browsing journey.",
    highlights: ["Searchable catalog & three-flavor palette builder", "Persistent favorites & reduced-motion interactions"],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Motion", "Anime.js", "Vite"],
    ghLink: "https://github.com/dongyunkim96/PaletteCafe", demoLink: "https://palette-cafe-chi.vercel.app/"
  },
  {
    id: "formlab", title: "FORM LAB", category: "Web experiences", label: "KEYBOARD CONFIGURATOR · DEMO COMMERCE",
    image: formlab, featured: true,
    description: "A mechanical keyboard storefront connecting 116 products with a compatibility-aware custom builder. Configure a 65%, 75%, or TKL keyboard, explore optional 3D previews, share a build, and complete a browser-local demo order without payment.",
    highlights: ["Typed compatibility checks & transparent build pricing", "Shareable configurations, persistent bag & demo checkout"],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Zustand", "React Three Fiber", "Motion", "Zod", "Vite"],
    ghLink: "https://github.com/dongyunkim96/FormLab", demoLink: "https://form-lab-kappa.vercel.app/"
  },
  {
    id: "weatherwear", title: "WeatherWear", category: "Applications", label: "WEATHER & EVERYDAY DECISIONS",
    preview: "weather", featured: true,
    description: "Know the weather. Dress for the day. A weather companion that turns forecasts into practical outfit recommendations, commute layers, and trip packing lists.",
    highlights: ["Forecast-driven clothing recommendations", "Saved places, trip planning & NWS alerts"],
    techStack: ["React", "TypeScript", "TanStack Query", "Zod"],
    ghLink: "https://github.com/dongyunkim96/WeatherWear", demoLink: "https://weather-wear-coral.vercel.app"
  },
  {
    id: "cryptopulse", title: "CryptoPulse", category: "Applications", label: "MARKET DATA & VISUALIZATION",
    preview: "crypto", featured: true,
    description: "A cryptocurrency research dashboard with historical charts, asset search, and a personal watchlist. A shared Redis cache and request budgets manage market-data access.",
    highlights: ["Interactive charts & persistent watchlist", "Cached CoinGecko data with explicit data states"],
    techStack: ["React", "TypeScript", "Zustand", "Upstash Redis"],
    ghLink: "https://github.com/dongyunkim96/CryptoPulse", demoLink: "https://cryptopulse-snowy.vercel.app"
  },
  { id: "snacks", title: "Korean Snacks Shop", category: "Applications", label: "TEAM PROJECT · E-COMMERCE", image: snacks,
    description: "A collaborative shopping experience for discovering Korean snacks, with product browsing, API integration, and a shopping cart.",
    techStack: ["React", "JavaScript", "REST API", "CSS"], ghLink: "https://github.com/dongyunkim96/seb45_main_025", demoLink: "https://www.youtube.com/watch?v=xVaUVn1yu20", demoLabel: "Video demo" },
  { id: "easymart", title: "EasyMart", category: "Applications", label: "E-COMMERCE", image: easyMart,
    description: "A responsive storefront exploring product discovery, authentication, and cart state with React, Firebase, and Redux Toolkit.",
    techStack: ["React", "Firebase", "Redux Toolkit", "Material UI"], ghLink: "https://github.com/dongyunkim96/EasyMart", demoLink: "https://easymart-kappa.vercel.app/" },
  { id: "notes", title: "Sticky Notes", category: "Applications", label: "PRODUCTIVITY", image: notes,
    description: "A focused note-taking interface for creating and managing sticky notes, built around reusable components and straightforward interactions.",
    techStack: ["React", "JavaScript", "CSS"], ghLink: "https://github.com/dongyunkim96/StickyNotes", demoLink: "https://sticky-notes-nine-sandy.vercel.app" },
  { id: "stackoverflow", title: "Stack Overflow Clone", category: "Applications", label: "TEAM PROJECT · COMMUNITY", image: stack,
    description: "A developer question-and-answer interface inspired by Stack Overflow, with questions, answers, and API-connected content.",
    techStack: ["React", "JavaScript", "REST API"], ghLink: "https://github.com/dongyunkim96/seb45_pre_014" },
  { id: "dongtube", title: "DongTube", category: "Applications", label: "VIDEO EXPERIENCE", image: dongtube,
    description: "A YouTube-inspired video interface exploring browsing, playback, and familiar content navigation in a responsive layout.",
    techStack: ["React", "JavaScript", "API"], ghLink: "https://github.com/dongyunkim96/DongTube", demoLink: "https://dong-tube.vercel.app" },
  { id: "javascript", title: "JavaScript Practice", category: "Experiments", label: "LANGUAGE FUNDAMENTALS", image: javascript,
    description: "Interactive exercises in DOM manipulation, event handling, and dynamic content, built with browser-native JavaScript.",
    techStack: ["JavaScript", "HTML", "CSS"], ghLink: "https://github.com/dongyunkim96/JavascriptPractice", demoLink: "https://javascript-practice-eosin.vercel.app" },
  { id: "css", title: "CSS Experience", category: "Experiments", label: "INTERFACE EXPLORATIONS", image: css,
    description: "A collection of layouts, transitions, and visual experiments exploring responsive CSS and interface details.",
    techStack: ["CSS", "HTML", "Responsive Design"], ghLink: "https://github.com/dongyunkim96/CSS-Experience", demoLink: "https://dongyunkim96.github.io/CSS-Experience/" },
  { id: "algorithms", title: "Algorithm Study", category: "Experiments", label: "PROBLEM SOLVING", image: algorithms,
    description: "JavaScript solutions covering arrays, strings, searching, sorting, and recursion, with a focus on core problem-solving skills.",
    techStack: ["JavaScript", "Algorithms", "Data Structures"], ghLink: "https://github.com/dongyunkim96/AlgorithmStudy" }
];
