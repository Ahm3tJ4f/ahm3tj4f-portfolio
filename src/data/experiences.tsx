import React from "react";
import { ExternalLinks } from "@/lib/constants";
import type { ExperienceItem } from "@/types";

export const experiences: ExperienceItem[] = [
  {
    role: "Front-End Developer",
    company: "Ferrum Capital",
    companyUrl: ExternalLinks.FerrumCapital,
    period: "August 2023 - Present",
    location: "Baku, Azerbaijan",
    description: [
      <>
        Built and maintained enterprise B2B platform serving 2,000+ partners for
        contract management and factoring; integrated Asan Imza e-signature.
      </>,
      <>
        Redesigned legacy CRM serving 50+ employees across 4 departments.
      </>,
      <>
        Developed two React Native mobile apps with 150K+ combined users.
      </>,
      <>
        Executed CI/CD pipelines reducing deployment time by 60%.
      </>,
    ],
  },
  {
    role: "Software Developer",
    company: "InnoSight LLC",
    companyUrl: ExternalLinks.InnoSight,
    period: "March 2024 – April 2025",
    location: "Baku, Azerbaijan",
    description: [
      <>
        Developed the frontend of an internal office room booking system with a
        Google Calendar–like UI and an admin panel for employee management
        using Next.js 14, server actions, React Hook Form, and Zod for
        server/client validation.
      </>,
      <>
        Designed and implemented a CRM platform for citizen onboarding with
        integrated video calls and browser/backend-level face detection for
        identity verification.
      </>,
      <>
        Built Swift and Kotlin SDKs for face liveness detection; implemented
        FastAPI backend with Google MediaPipe and authenticated WebSocket
        connection for real-time active liveness verification.
      </>,
    ],
  },
];



