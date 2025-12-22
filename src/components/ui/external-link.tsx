import Link from "next/link";

export function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`font-semibold text-brand-orange hover:underline underline-offset-4 decoration-brand-orange  transition-opacity ${
        className || ""
      }`}
    >
      {children}
    </Link>
  );
}
