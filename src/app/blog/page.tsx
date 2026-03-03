import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Ahmad Jafarov",
  description:
    "Articles on frontend development, React Native, TypeScript, and software engineering. Insights from 3+ years of building web and mobile applications.",
  openGraph: {
    title: "Blog | Ahmad Jafarov",
    description:
      "Articles on  software engineering. Insights from 3+ years of building web and mobile applications.",
  },
};

export default function Blog() {
  return (
    <div className="flex flex-col gap-12">
      <header>
        <h1 className="halftone-accent halftone-heading inline-block text-5xl md:text-7xl font-bold tracking-tight mb-4">
          Blog
        </h1>
      </header>
    </div>
  );
}
