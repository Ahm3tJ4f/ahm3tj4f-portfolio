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
        <ul className="space-y-3">
          <li className="flex items-center gap-3">
            <span className="w-20 shrink-0 text-sm">Email</span>
            <span className="text-xs md:text-sm text-muted-foreground font-mono">
              <ExternalLink href={CONTACT_LINKS.email.href}>
                {CONTACT_LINKS.email.label}
              </ExternalLink>
            </span>
          </li>
          <li className="flex items-center gap-3">
            <span className=" w-20 shrink-0 text-sm">LinkedIn</span>
            <span className="text-xs md:text-sm text-muted-foreground font-mono">
              <ExternalLink href={CONTACT_LINKS.linkedin.href}>
                {CONTACT_LINKS.linkedin.label}
              </ExternalLink>
            </span>
          </li>
          <li className="flex items-center gap-3">
            <span className=" w-20 shrink-0 text-sm">GitHub</span>
            <span className="text-xs md:text-sm text-muted-foreground font-mono">
              <ExternalLink href={CONTACT_LINKS.github.href}>
                {CONTACT_LINKS.github.label}
              </ExternalLink>
            </span>
          </li>
        </ul>
      </div>
    </footer>
  );
}
