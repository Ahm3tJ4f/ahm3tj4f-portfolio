"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { routes } from "@/data/navigation";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="py-10 mx-auto mb-4 md:mb-12">
      <ul className="flex md:gap-12 text-sm md:text-lg font-medium">
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
