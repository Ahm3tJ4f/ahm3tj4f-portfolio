import type { Metadata } from "next";
import { ExternalLink } from "@/components/ui/external-link";
import { experiences } from "@/data/experiences";

export const metadata: Metadata = {
  title: "Experience | Ahmad Jafarov",
  description: "3+ years of professional experience building web and mobile applications. Lead Frontend Developer at Ferrum Capital. Baku-based, globally available. Open to both international and local projects.",
  openGraph: {
    title: "Experience | Ahmad Jafarov",
    description: "3+ years of professional experience building web and mobile applications. Lead Frontend Developer at Ferrum Capital. Baku-based, globally available. Open to both international and local projects.",
  },
};

export default function Experience() {
  return (
    <main className="flex flex-col gap-12">
      <header>
        <h1 className="halftone-accent halftone-heading inline-block text-5xl md:text-7xl font-bold tracking-tight mb-4">
          Experience
        </h1>
      </header>

      <section aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="sr-only">Work Experience</h2>
        {experiences.map((exp, index) => (
          <article
            key={index}
            className="flex flex-col gap-3 md:gap-4 relative pl-4 md:pl-6 border-l-2 border-gray group mb-12 last:mb-0"
          >
            <header className="flex flex-col gap-1">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                <span>{exp.role}</span>
                <span className="hidden md:inline">@</span>
                <div className="flex items-center gap-2 md:contents">
                  <span className="md:hidden">@</span>
                  {exp.companyUrl ? (
                    <ExternalLink
                      href={exp.companyUrl}
                      ariaLabel={`${exp.company} website`}
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
                <time>{exp.period}</time>
                <span className="hidden md:inline" aria-hidden="true">•</span>
                <span className="w-full md:w-auto block md:inline">
                  {exp.location}
                </span>
              </div>
            </header>

            <div className="text-sm md:text-base text-brand-navy/90 leading-relaxed">
              {exp.description.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
