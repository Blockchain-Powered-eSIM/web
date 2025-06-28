import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import escapeHtml from "escape-html";

interface Article {
  slug: string;
  title: string;
  description: string;
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = params.category;

  const categoryDir = path.join(process.cwd(), "content/faq", category);

  let articles: Article[] = [];

  if (fs.existsSync(categoryDir)) {
    const files = fs.readdirSync(categoryDir);

    articles = files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => {
        const mdxSource = fs.readFileSync(
          path.join(categoryDir, file),
          "utf-8"
        );
        const { data } = matter(mdxSource);
        return {
          slug: file.replace(/\.mdx$/, ""),
          title: data.title || file,
          description: data.description || "",
        };
      });
  }

  return (
    <div className="mx-auto max-w-4xl p-8">
      <h1 className="mb-4 text-3xl font-bold">Category: {category}</h1>
      <ul className="space-y-4">
        {articles.map((article) => (
          <li key={article.slug}>
            <Link
              href={`/help/${escapeHtml(category)}/${escapeHtml(article.slug)}`}
              className="text-blue-600 underline"
            >
              {article.title}
            </Link>
            <p className="text-sm text-gray-500">{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
