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
      className={`font-semibold text-brand-orange hover:underline underline-offset-4 decoration-brand-orange transition-opacity inline-flex items-center gap-1 ${
        className || ""
      }`}
    >
      {children}
      {ariaLabel && <span className="sr-only">(opens in new tab)</span>}
    </Link>
  );
}
