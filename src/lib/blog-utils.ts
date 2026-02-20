import fs from "fs";
import path from "path";
import matter from "gray-matter";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const contentDirectory = path.join(process.cwd(), "content", "blogs");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const fileNames = fs.readdirSync(contentDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    const postData = data as Omit<BlogPost, "slug">;

    return {
      slug,
      title: postData.title,
      description: postData.description,
      date: String(postData.date),
      readTime: postData.readTime,
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost & { content: string } | null> {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const postData = data as Omit<BlogPost, "slug">;

    return {
      slug,
      title: postData.title,
      description: postData.description,
      date: String(postData.date),
      readTime: postData.readTime,
      content,
    };
  } catch {
    return null;
  }
}

export const mdxOptions = {
  mdxOptions: {
    rehypePlugins: [rehypeSlug],
    remarkPlugins: [remarkGfm],
  },
};
