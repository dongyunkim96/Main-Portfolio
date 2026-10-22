import shilla from "../Assets/ShillaBakery.png";
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
    id: "shilla", title: "Shilla Bakery", category: "Web experiences", label: "BAKERY & BRAND EXPERIENCE",
    image: shilla, featured: true,
    description: "A warm, responsive digital storefront for a bakery. Reusable components and clear navigation bring the brand experience from desktop to mobile.",
    highlights: ["Responsive brand experience", "Reusable component architecture"],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    ghLink: "https://github.com/dongyunkim96/Shilla-Bakery", demoLink: "https://shilla-bakery.vercel.app"
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
