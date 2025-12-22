import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
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
        <div className="max-w-2xl min-h-screen mx-auto px-4 mb-24 md:mb-48">
          <HackWarning />
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
