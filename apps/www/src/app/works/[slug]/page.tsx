import { compileMDX } from "next-mdx-remote/rsc";
import { join } from "path";
import { ComponentProps } from "react";
import { Metadata } from "next";

import { getSlugs, readTextFile } from "@/lib/articles";

const baseDir = join(process.cwd(), "_works");

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams(): ComponentProps<
  typeof WorkPage
>["params"][] {
  const files = getSlugs(baseDir);
  return files.map((file) => ({ slug: file }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  return {
    title: slug,
  };
}

export default async function WorkPage({ params: { slug } }: Props) {
  const source = await readTextFile(baseDir, slug);
  const { content, frontmatter } = await compileMDX({
    source,
    options: {
      parseFrontmatter: true,
    },
  });

  return <div className="prose prose-slate max-w-none">{content}</div>;
}
