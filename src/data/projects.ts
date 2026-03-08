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
      "Mobile factoring app with 150K+ active users. Handles factoring, obligations, and video meetings.",
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
      "Mental health platform with 30+ partner psychologists and 400+ active customers.",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Server Actions",
      "Zod",
      "shadcn/ui",
      "TailwindCSS",
    ],
    link: ExternalLinks["4You"],
  },
  {
    title: "CodeMark",
    description:
      "Browser-based code notebook with live preview using esbuild-WASM.",
    techStack: ["React", "TypeScript", "esbuild", "WebAssembly", "Monaco Editor"],
    github: ExternalLinks.CodeMarkGithub,
    link: ExternalLinks.CodeMarkDemo,
  },
];



