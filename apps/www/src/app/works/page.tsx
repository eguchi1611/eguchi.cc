import { getSlugs, readTextFile } from "@/lib/articles";
import { compileMDX } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { join } from "path";

const baseDir = join(process.cwd(), "_works");

export default async function WorkIndexPage() {
  const slugs = getSlugs(baseDir);
  const articles = await Promise.all(
    slugs.map(async (slug) => {
      const source = await readTextFile(baseDir, slug);
      const { content, frontmatter } = await compileMDX<
        Partial<{ title: string; thumbnail: string }>
      >({
        source,
        options: {
          parseFrontmatter: true,
        },
      });
      return { content, frontmatter, slug };
    }),
  );

  return (
    <div className="flex flex-col gap-4">
      {articles.map(({ slug, frontmatter }) => (
        <Link
          key={slug}
          href={`/works/${slug}`}
          className="flex flex-col-reverse overflow-hidden rounded border sm:flex-row"
        >
          <div className="flex-1 p-2">{frontmatter.title || "Notitle"}</div>
          <Image
            alt=""
            src={frontmatter.thumbnail || ""}
            width={500}
            height={375}
            className="h-auto w-auto sm:h-24"
          />
        </Link>
      ))}
    </div>
  );
}
