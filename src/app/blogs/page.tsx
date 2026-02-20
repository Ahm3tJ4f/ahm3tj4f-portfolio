import Link from "next/link";
import { getBlogPosts } from "@/lib/blog-utils";

export default async function Blogs() {
  const blogs = await getBlogPosts();

  return (
    <main className="flex flex-col gap-12">
      <header>
        <h1 className="halftone-accent halftone-heading inline-block text-5xl md:text-7xl font-bold tracking-tight mb-4">
          Blogs
        </h1>
      </header>

      <div className="flex flex-col gap-8">
        {blogs.map((blog) => (
          <article
            key={blog.slug}
            className="group flex flex-col gap-3 p-6 border-2 border-border rounded-lg hover:border-brand-orange transition-colors"
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              <Link
                href={`/blogs/${blog.slug}`}
                className="group-hover:text-brand-orange transition-colors"
              >
                {blog.title}
              </Link>
            </h2>

            <p className="text-base text-brand-navy/90 leading-relaxed">
              {blog.description}
            </p>

            <Link
              href={`/blogs/${blog.slug}`}
              className="font-medium text-brand-orange hover:underline underline-offset-4 decoration-brand-orange transition-opacity"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
