import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import "@/styles/globals.css";
import HackWarning from "@/components/hack-warning";

export const metadata: Metadata = {
  title: "Ahmad Jafarov - Portfolio",
  description: "Software Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-orange focus:text-white focus:rounded-md focus:font-medium"
        >
          Skip to main content
        </a>
        <div className="max-w-2xl min-h-screen mx-auto px-4 py-10 md:py-20 flex flex-col gap-12">
          <HackWarning />
          <Navigation />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
