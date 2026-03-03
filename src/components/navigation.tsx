"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { routes } from "@/data/navigation";
import { useTheme } from "@/context/theme-context";
import { Moon, Sun } from "lucide-react";

export function Navigation() {
  const pathname = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "system") {
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
    } else {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };

  const getThemeIcon = () => {
    if (theme === "system") {
      return resolvedTheme === "dark" ? (
        <Moon className="w-4 h-4" />
      ) : (
        <Sun className="w-4 h-4" />
      );
    }
    return theme === "dark" ? (
      <Moon className="w-4 h-4" />
    ) : (
      <Sun className="w-4 h-4" />
    );
  };

  const getThemeLabel = () => {
    return resolvedTheme === "dark" ? "Dark" : "Light";
  };

  return (
    <nav
      aria-label="Main navigation"
      className="flex md:flex-row flex-col-reverse md:items-center justify-between gap-4"
    >
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
      <button
        onClick={toggleTheme}
        className="flex items-center gap-2 hover:text-foreground transition-colors md:self-auto self-start px-2"
        aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
      >
        {getThemeIcon()}
        <span className="">{getThemeLabel()}</span>
      </button>
    </nav>
  );
}
