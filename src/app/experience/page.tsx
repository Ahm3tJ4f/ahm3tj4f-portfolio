import { ExternalLink } from "@/components/ui/external-link";
import { ExternalLinks } from "@/lib/constants";
import type { ExperienceItem } from "@/types";

const experiences: ExperienceItem[] = [
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

export default function Experience() {
  return (
    <div className="flex flex-col gap-12 ">
      <h1 className="halftone-accent halftone-heading inline-block text-5xl md:text-7xl font-bold tracking-tight mb-4">
        Experience
      </h1>

      {/* <div className="space-y-12 md:space-y-16"></div> */}
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="flex flex-col gap-3 md:gap-4 relative pl-4 md:pl-6 border-l-2 border-gray group"
        >
          <div className="flex flex-col gap-1">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span>{exp.role}</span>
              <span className="hidden md:inline">@</span>
              <div className="flex items-center gap-2 md:contents">
                <span className="md:hidden">@</span>
                {exp.companyUrl ? (
                  <ExternalLink
                    href={exp.companyUrl}
                    className="text-brand-brown hover:text-brand-orange hover:underline decoration-brand-orange underline-offset-4 transition-colors"
                  >
                    {exp.company}
                  </ExternalLink>
                ) : (
                  <span className="text-brand-brown">{exp.company}</span>
                )}
              </div>
            </h3>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs md:text-sm text-muted-foreground font-mono">
              <span>{exp.period}</span>
              <span className="hidden md:inline ">•</span>
              <span className="w-full md:w-auto block md:inline">
                {exp.location}
              </span>
            </div>
          </div>

          <div className="text-sm md:text-base text-brand-navy/90 leading-relaxed">
            {exp.description.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
