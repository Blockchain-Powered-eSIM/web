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
    <div className="mx-auto max-w-4xl p-8">
      <h1 className="mb-4 text-3xl font-bold">{data.title}</h1>
      <div className="prose">
        <MDXRemote source={content} />
      </div>
    </div>
  );
}
