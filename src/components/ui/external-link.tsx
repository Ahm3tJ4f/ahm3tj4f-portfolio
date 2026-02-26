import Link from "next/link";

export function ExternalLink({
  href,
  children,
  className,
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel ? `${ariaLabel} (opens in new tab)` : undefined}
      className={`font-semibold hover:underline underline-offset-4 transition-opacity inline-flex items-center gap-1 ${
        className || ""
      }`}
      style={{ color: "var(--brand-orange)" }}
    >
      {children}
      {ariaLabel && <span className="sr-only">(opens in new tab)</span>}
    </Link>
  );
}
