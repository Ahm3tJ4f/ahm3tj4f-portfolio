import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/context/theme-context";
import "@/styles/globals.css";
import HackWarning from "@/components/hack-warning";

export const metadata: Metadata = {
  title: "Ahmad Jafarov",
  description:
    "Full-stack Developer with 3+ years of expertise, specializing in web and mobile applications. ",
  keywords: [
    "frontend developer",
    "react native",
    "full-stack engineer",
    "typescript",
    "expo",
    "next.js",
    "baku",
    "azerbaijan",
  ],
  authors: [{ name: "Ahmad Jafarov" }],
  creator: "Ahmad Jafarov",
  openGraph: {
    title: "Ahmad Jafarov",
    description:
      "Full-stack / React Native Developer with 3+ years of expertise, specializing in web and mobile applications. Built projects with 100,000+ active users across fintech and business sectors. Baku-based, globally available. Open to both international and local projects.",
    type: "website",
    locale: "en_US",
    siteName: "Ahmad Jafarov",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Jafarov",
    description:
      "Full-stack / React Native Developer with 3+ years of expertise, specializing in web and mobile applications. Built projects with 100,000+ active users across fintech and business sectors. Baku-based, globally available. Open to both international and local projects.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground">
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-orange focus:text-white focus:rounded-md focus:font-medium"
          >
            Skip to main content
          </a>
          <div className="max-w-2xl min-h-screen mx-auto px-4 py-10 md:py-20 flex flex-col gap-12">
            <HackWarning />
            <Navigation />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
