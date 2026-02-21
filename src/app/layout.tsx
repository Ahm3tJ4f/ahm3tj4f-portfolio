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
        <div className="max-w-2xl min-h-screen mx-auto px-4 py-10 md:py-20 flex flex-col gap-12">
          <HackWarning />
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
