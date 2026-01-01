import Image from "next/image";
import Link from "next/link";
import { Link2 as LinkIcon } from "lucide-react";
import { projects } from "@/data/projects";

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
                <h2 className="text-xl md:text-2xl font-bold tracking-tight">
                  {project.title}
                </h2>
                <ul
                  aria-label="Technologies used"
                  className="text-xs md:text-sm font-mono text-brand-navy/40 list-none p-0 m-0"
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

              <div className="flex items-center  gap-4  md:gap-2 shrink-0 self-start mt-1">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-navy/60 hover:text-brand-orange transition-colors p-1"
                    aria-label={`View source code for ${project.title}`}
                    title={project.github}
                  >
                    <Image
                      className="text-red-500"
                      src="/github.svg"
                      alt="GitHub"
                      width={18}
                      height={18}
                    />
                  </Link>
                )}
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-navy/60 hover:text-brand-orange transition-colors p-1"
                    aria-label={`Visit project website for ${project.title}`}
                    title={project.link}
                  >
                    <LinkIcon className="w-5 h-5" />
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
