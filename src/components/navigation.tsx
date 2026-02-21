"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { routes } from "@/data/navigation";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation" className="mx-auto ">
      <ul className="flex md:gap-8 gap-2 md:text-lg font-medium">
        {routes.map(({ to, label }) => {
          const isActive =
            to === "/" ? pathname === "/" : pathname.startsWith(to);

          return (
            <li key={to}>
              <Link
                href={to}
                className={cn(
                  "decoration-4 hover:underline decoration-brand-orange underline-offset-6 px-2 pb-1 transition-colors",
                  isActive && "underline",
                )}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
