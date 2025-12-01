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
        Designed and developed the front end of a{" "}
        <strong>CRM application</strong> using <strong>Next.js</strong> and{" "}
        <strong>TypeScript</strong>, facilitating enhanced customer management
        from various partners across 4 departments and optimizing the user
        experience for employees.
      </>,
      <>
        Developed <strong>Ferrum Capital</strong> mobile app using{" "}
        <strong>Expo</strong> and <strong>native modules</strong> (Swift/Kotlin)
        to integrate <strong>SIMA SDKs</strong>,{" "}
        <strong>video meeting feature</strong> covering core business logic and
        serving <strong>150,000+ active users</strong>.
      </>,
      <>
        Built <strong>Ferrum Capital Business</strong> mobile app, implementing{" "}
        <strong>role-based authentication</strong> and integrating{" "}
        <strong>ASAN Sign services</strong> to ensure secure and compliant
        digital signature operations for corporate clients.
      </>,
      <>
        Designed and developed the front-end part of an{" "}
        <strong>employee evaluation system</strong> using{" "}
        <strong>Next.js 14</strong>, streamlining performance assessments across
        the company with a user-friendly interface using the{" "}
        <strong>Ant Design library</strong>.
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
        Built the entire frontend of a <strong>mental health platform</strong>{" "}
        using <strong>Next.js 14</strong> with <strong>server actions</strong>,
        integrating payment systems, admin panels for psychologists and doctors,
        SEO-optimized features, and responsive design for multiple mobile
        devices.
      </>,
      <>
        Implemented a <strong>clean application architecture</strong>, designed
        a complex authentication flow with robust server-side security, and
        customized <strong>shadcn/ui</strong> and <strong>TailwindCSS</strong>{" "}
        to match the platform&apos;s design system.
      </>,
      "Contributed to product design, architecture, and launch strategy as a founding member.",
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
        Developed the frontend of an{" "}
        <strong>internal office room booking system</strong> with a{" "}
        <strong>Google Calendar–like interface</strong> and an{" "}
        <strong>admin panel</strong> for employee management, built using{" "}
        <strong>Next.js 14</strong>, <strong>server actions</strong>, and{" "}
        <strong>React Hook Form with Zod</strong> for both server and
        client-side validation.
      </>,
      <>
        Designed and implemented a <strong>CRM platform</strong> for citizen
        onboarding featuring <strong>integrated video calls</strong> and
        browser/backend-level <strong>face detection</strong> for identity
        verification.
      </>,
      <>
        Built <strong>Swift and Kotlin SDKs</strong> enabling user
        authentication through <strong>face liveness detection</strong> powered
        by <strong>Google MediaPipe</strong>.
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
        Gained deep knowledge of <strong>Java</strong> programming language and
        studied <strong>Database Fundamentals</strong>,{" "}
        <strong>Algorithms</strong>, and <strong>Data Structures</strong>.
      </>,
      <>
        Learned <strong>Agile</strong> methodologies and software development
        lifecycle in <strong>corporate environments</strong>.
      </>,
      <>
        Selected as one of the <strong>50 students</strong> from{" "}
        <strong>5000 applicants</strong>.
      </>,
    ],
  },
];

export default function Experience() {
  return (
    <div className="flex flex-col gap-12 ">
      <h1 className="halftone-accent inline-block text-7xl font-bold tracking-tight mb-4">
        Experience
      </h1>

      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 relative pl-6 border-l-[3px] border-transparent  hover:border-brand-orange group"
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-2xl font-bold  tracking-tight">
                {exp.role} @{" "}
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
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                <span>{exp.period}</span>
                <span className="text-brand-teal">•</span>
                <span>{exp.location}</span>
              </div>
            </div>

            <ul className="flex flex-col gap-3 list-disc pl-4 text-brand-navy/90 leading-relaxed marker:text-brand-brown">
              {exp.description.map((item, i) => (
                <li key={i} className="pl-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
