import { ExternalLinks } from "@/lib/constants";
import type { ProjectItem } from "@/types";
import { Github, Globe } from "lucide-react";
import Link from "next/link";

const projects: ProjectItem[] = [
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

export default function Projects() {
  return (
    <main className="flex flex-col gap-12">
      <header>
        <h1 className="halftone-accent halftone-heading inline-block text-5xl md:text-7xl font-bold tracking-tight mb-4">
          Projects
        </h1>
      </header>

      <ul
        aria-label="Project list"
        className="flex flex-col gap-12 list-none p-0 m-0"
      >
        {projects.map((project, index) => (
          <li
            key={index}
            className="group flex flex-col gap-1 relative pl-4 md:pl-6 border-l-2 border-gray"
          >
            <div className="flex items-baseline justify-between gap-4">
              <div className="flex flex-col gap-2">
                <h2 className="text-lg md:text-xl font-bold font-mono text-brand-navy group-hover:text-brand-orange transition-colors">
                  {project.title}
                </h2>
                <ul
                  aria-label="Technologies used"
                  className="text-xs md:text-sm font-mono text-brand-navy/40 group-hover:text-brand-navy/60 list-none p-0 m-0"
                >
                  {project.techStack.map((tech, i) => (
                    <li key={tech} className="inline">
                      {tech}
                      {i < project.techStack.length - 1 && (
                        <span aria-hidden="true" className="text-sm">
                          {" "}
                          •{" "}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-2 shrink-0 self-start mt-1">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-navy/60 hover:text-brand-orange transition-colors p-1"
                    aria-label={`View source code for ${project.title}`}
                  >
                    <Github className="w-4 h-4" />
                  </Link>
                )}
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-navy/60 hover:text-brand-orange transition-colors p-1"
                    aria-label={`Visit project website for ${project.title}`}
                  >
                    <Globe className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>

            <p className="text-brand-navy/80 text-sm md:text-base max-w-2xl leading-relaxed mt-2">
              {project.description}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
