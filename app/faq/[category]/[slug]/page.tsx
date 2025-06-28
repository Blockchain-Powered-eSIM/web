import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function ArticlePage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const { category, slug } = params;

  const filePath = path.join(
    process.cwd(),
    "content/faq",
    category,
    `${slug}.mdx`
  );

  if (!fs.existsSync(filePath)) {
    return <div>Article not found.</div>;
  }

  const source = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(source);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <div className="prose">
        <MDXRemote source={content} />
      </div>
    </div>
  );
}

