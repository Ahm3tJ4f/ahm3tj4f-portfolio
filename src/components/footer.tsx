import { ExternalLink } from "@/components/ui/external-link";

const CONTACT_LINKS = {
  email: {
    href: "mailto:ahmadjafarov02@gmail.com",
    label: "ahmadjafarov02@gmail.com",
  },
  linkedin: {
    href: "https://www.linkedin.com/in/ahmad-jafarov-221734190/",
    label: "linkedin.com/in/ahmad-jafarov-221734190",
  },
  github: { href: "https://github.com/ahm3tj4f", label: "github.com/ahm3tj4f" },
} as const;

export function Footer() {
  return (
    <footer className="mt-auto pt-8">
      <div className="border-t border-border/40" />
      <div className="mt-8 space-y-6">
        <p className="text-sm text-muted-foreground">
          Let&apos;s work together!
        </p>
        <address className="not-italic">
        <dl className="space-y-3">
          <div className="flex items-center gap-3">
            <dt className="w-20 shrink-0 text-sm">Email</dt>
            <dd className="text-xs md:text-sm text-muted-foreground font-mono m-0">
              <ExternalLink href={CONTACT_LINKS.email.href} ariaLabel="Send email">
                {CONTACT_LINKS.email.label}
              </ExternalLink>
            </dd>
          </div>
          <div className="flex items-center gap-3">
            <dt className="w-20 shrink-0 text-sm">LinkedIn</dt>
            <dd className="text-xs md:text-sm text-muted-foreground font-mono m-0">
              <ExternalLink href={CONTACT_LINKS.linkedin.href} ariaLabel="View LinkedIn profile">
                {CONTACT_LINKS.linkedin.label}
              </ExternalLink>
            </dd>
          </div>
          <div className="flex items-center gap-3">
            <dt className="w-20 shrink-0 text-sm">GitHub</dt>
            <dd className="text-xs md:text-sm text-muted-foreground font-mono m-0">
              <ExternalLink href={CONTACT_LINKS.github.href} ariaLabel="View GitHub profile">
                {CONTACT_LINKS.github.label}
              </ExternalLink>
            </dd>
          </div>
          <div className="flex items-center gap-3">
            <dt className="w-20 shrink-0 text-sm">Resume</dt>
            <dd className="text-xs md:text-sm text-muted-foreground font-mono m-0">
              <ExternalLink href="/resume.pdf" ariaLabel="View resume PDF">View Resume</ExternalLink>
            </dd>
          </div>
        </dl>
        </address>
      </div>
    </footer>
  );
}
