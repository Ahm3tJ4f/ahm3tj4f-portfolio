import { ExternalLink } from "@/components/ui/external-link";
import { experiences } from "@/data/experiences";

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
