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

      {/* <MobileNavigation /> */}
    </nav>
  );
}
// function MobileNavigation() {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();

//   return (
//     <div className="md:hidden">
//       <div className="flex justify-start relative z-50">
//         <Button
//           variant="ghost"
//           size="icon"
//           className="-ml-2 hover:bg-transparent"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-expanded={isOpen}
//           aria-label="Toggle menu"
//         >
//           {isOpen ? (
//             <X className="size-6 text-brand-navy transition-transform duration-200 rotate-90" />
//           ) : (
//             <Menu className="size-6 text-brand-navy transition-transform duration-200" />
//           )}
//         </Button>
//       </div>

//       {/* Minimal Expandable Menu */}
//       <div
//         className={cn(
//           "overflow-hidden transition-all duration-150 ease-in-out origin-top",
//           isOpen
//             ? "max-h-[400px] opacity-100 mt-4 mb-8"
//             : "max-h-0 opacity-0 mt-0 mb-0"
//         )}
//       >
//         <ul className="flex flex-col gap-4 pl-2 border-l-2 border-brand-navy/10 ml-2">
//           {routes.map(({ to, label }) => {
//             const isActive =
//               to === "/" ? pathname === "/" : pathname.startsWith(to);
//             return (
//               <li key={to}>
//                 <Link
//                   href={to}
//                   onClick={() => setIsOpen(false)}
//                   className={cn(
//                     "text-xl font-medium block py-1 text-brand-navy hover:text-brand-orange transition-colors",
//                     isActive && "text-brand-orange"
//                   )}
//                 >
//                   {label}
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// }
