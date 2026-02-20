import { ExternalLinks } from "@/lib/constants";
import type { ProjectItem } from "@/types";

export const projects: ProjectItem[] = [
  {
    title: "Song Pal Bot",
    description:
      "Telegram bot enabling two users to share music and track listening habits. Features unique pairing codes, automatic link detection (Spotify/YouTube), click tracking, and scheduled reminder notifications.",
    techStack: ["FastAPI", "PostgreSQL", "aiogram", "Docker", "Alembic"],
    github: ExternalLinks.SongPalBotGithub,
    link: ExternalLinks.SongPalBot,
  },
  {
    title: "PixelPro CRM",
    description:
      "Full-stack CRM with FastAPI backend and Next.js 15 frontend. Features citizen data integration (ASAN), Jitsi video meetings, and JWT auth.",
    techStack: ["FastAPI", "Redis", "Docker", "PostgreSQL", "NextJS"],
    github: ExternalLinks.PixelProCRM,
  },
  {
    title: "Ferrum Capital Mobile",
    description:
      "Mobile banking app with 100,000+ active users. Designed and implemented full-stack SIMA citizen certificate authentication with X.509 certificate parsing and RSA-SHA256 signature verification. Developed multi-module architecture for obligations, factoring, and video-meetings with Firebase Cloud Messaging push notifications and offline capabilities.",
    techStack: [
      "React Native (Expo)",
      "Expo Modules",
      "TypeScript",
      "TanStack React Query",
      "React Hook Form",
      "Zod",
    ],
    link: ExternalLinks.FerrumCapitalCustomerApp,
  },
  {
    title: "4YOU",
    description:
      "Mental health platform with Server Actions as type-safe RPC and end-to-end validation with Zod schemas. Built custom design system with shadcn/ui components and TailwindCSS. Implemented JWT token rotation via Edge middleware with automatic refresh on 401 responses and HTTP-only cookie-based session storage.",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Server Actions",
      "Zod",
      "shadcn/ui",
      "TailwindCSS",
      "Docker",
    ],
    link: ExternalLinks["4You"],
  },
  {
    title: "CodeMark",
    description:
      "Jupyter-like notebook for JavaScript/React with live in-browser code execution using esbuild-WASM.",
    techStack: ["React", "TypeScript", "esbuild", "WebAssembly"],
    github: ExternalLinks.CodeMarkGithub,
    link: ExternalLinks.CodeMarkDemo,
  },
];



