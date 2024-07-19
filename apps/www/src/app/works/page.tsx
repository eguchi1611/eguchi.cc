import { getSlugs, readTextFile } from "@/lib/articles";
import { compileMDX } from "next-mdx-remote/rsc";
import Link from "next/link";
import { join } from "path";

const baseDir = join(process.cwd(), "_works");

export default async function WorkIndexPage() {
  const slugs = getSlugs(baseDir);
  const articles = await Promise.all(
    slugs.map(async (slug) => {
      const source = await readTextFile(baseDir, slug);
      const { content, frontmatter } = await compileMDX<{ title: string }>({
        source,
        options: {
          parseFrontmatter: true,
        },
      });
      return { content, frontmatter, slug };
    }),
  );

  return (
    <div className="">
      {articles.map(({ slug, frontmatter }) => (
        <div key={slug}>
          <Link href={`/works/${slug}`}>{frontmatter.title || ""}</Link>
        </div>
      ))}
    </div>
  );
}
