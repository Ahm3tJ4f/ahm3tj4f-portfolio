import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/context/theme-context";
import "@/styles/globals.css";
import HackWarning from "@/components/hack-warning";

// WOFF2 subsets (latin + latin-ext) of the variable font. Subsetting plus
// woff2 compression cuts the mobile font payload from ~930 KB to ~110 KB,
// which was the main cause of slow LCP on mobile.
const inter = localFont({
  src: [
    {
      path: "../fonts/Inter/inter-latin.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../fonts/Inter/inter-latin-ext.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahmad Jafarov | Frontend Developer (React, React Native)",
  description:
    "Frontend Developer specializing in React & React Native web and mobile apps. 3+ years experience building for 100K+ users. Based in Baku, available globally.",
  keywords: [
    "frontend developer",
    "react native",
    "react",
    "typescript",
    "expo",
    "next.js",
    "baku",
    "azerbaijan",
    "mobile apps",
    "web development",
  ],
  authors: [{ name: "Ahmad Jafarov" }],
  creator: "Ahmad Jafarov",
  openGraph: {
    title: "Ahmad Jafarov | Frontend Developer (React, React Native)",
    description:
      "Frontend Developer specializing in React & React Native web and mobile apps. 3+ years experience building for 100K+ users. Based in Baku, available globally.",
    type: "website",
    locale: "en_US",
    siteName: "Ahmad Jafarov",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Jafarov | Frontend Developer (React, React Native)",
    description:
      "Frontend Developer specializing in React & React Native web and mobile apps. 3+ years experience building for 100K+ users. Based in Baku, available globally.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <script src="https://app.inlyne.ai/scripts/preview.js" async></script>
      </head>
      <body className="antialiased bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
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
