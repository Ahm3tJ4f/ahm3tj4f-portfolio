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

export default function Contact() {
  return (
    <main className="flex flex-col gap-12">
      <header>
        <h1 className="halftone-accent halftone-heading inline-block text-5xl md:text-7xl font-bold tracking-tight mb-4">
          Get in touch
        </h1>
      </header>

      <div className="space-y-8">
        {/* <div>
          <h2 className="text-xl font-semibold mb-4">What I can help with</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-medium text-muted-foreground">Development</h3>
              <ul className="space-y-2 text-sm">
                <li>React & Next.js applications</li>
                <li>React Native / Expo mobile apps</li>
                <li>CRM systems and internal tools</li>
                <li>Payment integrations</li>
                <li>Biometric authentication</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-medium text-muted-foreground">Technical</h3>
              <ul className="space-y-2 text-sm">
                <li>Code reviews & architecture</li>
                <li>Design systems with TailwindCSS</li>
                <li>API development (FastAPI, Node.js)</li>
                <li>Performance optimization</li>
                <li>SEO & accessibility</li>
              </ul>
            </div>
          </div>
        </div>*/}

        {/*<h2 className="text-xl font-semibold mb-4">Get in touch</h2>*/}
        <ul className="space-y-3">
          <li className="flex items-center gap-3">
            <span className="text-muted-foreground w-20 shrink-0">Email</span>
            <span className="text-xs md:text-sm text-muted-foreground font-mono">
              <ExternalLink href={CONTACT_LINKS.email.href}>
                {CONTACT_LINKS.email.label}
              </ExternalLink>
            </span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-muted-foreground w-20 shrink-0">
              LinkedIn
            </span>
            <span className="text-xs md:text-sm text-muted-foreground font-mono">
              <ExternalLink href={CONTACT_LINKS.linkedin.href}>
                {CONTACT_LINKS.linkedin.label}
              </ExternalLink>
            </span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-muted-foreground w-20 shrink-0">GitHub</span>
            <span className="text-xs md:text-sm text-muted-foreground font-mono">
              <ExternalLink href={CONTACT_LINKS.github.href}>
                {CONTACT_LINKS.github.label}
              </ExternalLink>
            </span>
          </li>
        </ul>
        <p className="mt-4 text-xs text-muted-foreground">
          I try to respond within 24-48 hours.
        </p>
      </div>
    </main>
  );
}
