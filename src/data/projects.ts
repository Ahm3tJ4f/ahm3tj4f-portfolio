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
  },
  {
    title: "CodeMark",
    description:
      "Interactive coding platform. Users write React code and execute it in real time. Uses esbuild compiled to WebAssembly.",
    techStack: ["React", "TypeScript", "WebAssembly"],
    github: ExternalLinks.CodeMarkGithub,
    link: ExternalLinks.CodeMarkDemo,
  },
  {
    title: "4You",
    description:
      "Mental health platform built from scratch. Secure payments, doctor panels, and custom design system.",
    techStack: ["NextJS", "TypeScript"],
    link: ExternalLinks["4You"],
  },
  {
    title: "Ferrum Capital",
    description:
      "Consumer finance mobile app. Features biometric auth (Native Swift/Kotlin SDKs), digital signing, video meetings, and partner marketplace.",
    techStack: ["React Native", "Expo", "TypeScript"],
    link: ExternalLinks.FerrumCapitalCustomerApp,
  },
  {
    title: "Ferrum Capital Business",
    description:
      "B2B app for partners and sellers. Features obligation creation, QR scanning, ASAN digital signature integration, and PDF generation.",
    techStack: ["React Native", "Expo", "TypeScript"],
    link: ExternalLinks.FerrumCapitalBusinessApp,
  },
];



