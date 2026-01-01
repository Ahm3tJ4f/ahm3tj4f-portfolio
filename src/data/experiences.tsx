import React from "react";
import { ExternalLinks } from "@/lib/constants";
import type { ExperienceItem } from "@/types";

export const experiences: ExperienceItem[] = [
  {
    role: "Leading Front-End Developer",
    company: "Ferrum Capital",
    companyUrl: ExternalLinks.FerrumCapital,
    period: "August 2023 - Present",
    location: "Baku, Azerbaijan",
    description: [
      <>
        Leading the frontend development of internal financial tools and
        customer-facing products. I redesigned and built the CRM system to
        streamline operations across 4 departments and led the development of
        two key mobile applications (Expo), serving over 150,000 users with
        features like video meetings and digital document signing.
      </>,
    ],
  },
  {
    role: "Co-Founder & Front-End Developer",
    company: "4YOU",
    companyUrl: ExternalLinks["4You"],
    period: "September 2024 - August 2025",
    location: "Baku, Azerbaijan",
    description: [
      <>
        Built a comprehensive mental health platform from the ground up using
        Next.js 14. Architected the entire frontend, including a secure payment
        system, doctor admin panels, and a custom design system with
        TailwindCSS, while contributing to the product strategy as a founding
        member.
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
        Developed specialized internal tools including an office booking system
        and a CRM for citizen onboarding. Engineered core identity verification
        features using browser-based face detection and built custom mobile SDKs
        (Swift/Kotlin) for secure biometric authentication.
      </>,
    ],
  },
  {
    role: "Intern",
    company: "YeloBank - ITLab",
    companyUrl: ExternalLinks.YeloBank,
    period: "July - August 2022",
    location: "Baku, Azerbaijan",
    description: [
      <>
        Selected as one of 50 top candidates from 5000 applicants. Gained
        hands-on experience with Java, database fundamentals, and Agile
        methodologies within a corporate banking environment.
      </>,
    ],
  },
];


