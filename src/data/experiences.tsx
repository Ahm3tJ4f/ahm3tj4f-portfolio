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
        Leading frontend development on internal systems (CRMs, ERP tools) and
        public mobile applications, taking projects from architecture to delivery.
      </>,
      <>
        Documented technical specifications, API integrations, and architectural
        decisions for all frontend projects.
      </>,
      <>
        Conducted code reviews, established coding standards, and implemented
        best practices for code quality.
      </>,
      <>
        Managed workloads and coordinated between developers, aligned with
        backend teams for seamless integration.
      </>,
      <>
        Implemented CI/CD pipelines for automated testing and deployment
        workflows.
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
  {
    role: "Intern",
    company: "YeloBank",
    companyUrl: ExternalLinks.YeloBank,
    period: "July - August 2022",
    location: "Baku, Azerbaijan",
    description: [
      <>
        Selected as one of 50 students from 5000 applicants.
      </>,
      <>
        Worked with Spring and Spring Boot, connected applications to MySQL,
        performed data manipulation, and worked with REST APIs.
      </>,
    ],
  },
];



