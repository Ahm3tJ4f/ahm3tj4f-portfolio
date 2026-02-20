import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogPostBySlug, getBlogPosts, mdxOptions } from "@/lib/blog-utils";
import { AsciiWave } from "@/components/ascii-wave";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const blogs = await getBlogPosts();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const blog = await getBlogPostBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="flex flex-col gap-12 max-w-4xl">
      <div className="flex flex-col gap-4">
        <header className="flex flex-col gap-4">
          <h1 className="halftone-accent halftone-heading inline-block text-4xl md:text-6xl font-bold tracking-tight">
            {blog.title}
          </h1>
          <p className="text-lg text-brand-navy/90 leading-relaxed">
            {blog.description}
          </p>
        </header>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <AsciiWave />
          <p className="text-xs text-muted-foreground text-center font-mono">
            The ASCII wave we&apos;re talking about
          </p>
        </div>

        <article className="prose prose-slate max-w-none prose-pre:bg-slate-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:border prose-pre:border-slate-200 prose-code:text-brand-navy prose-code:font-mono prose-code:text-sm prose-headings:mt-8 prose-headings:mb-4 prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:font-semibold prose-h2:tracking-tight prose-p:text-brand-navy/90 prose-p:leading-relaxed prose-strong:text-brand-orange prose-li:text-brand-navy/90">
          <MDXRemote source={blog.content as string} options={mdxOptions} />
        </article>
      </div>
    </main>
  );
}
