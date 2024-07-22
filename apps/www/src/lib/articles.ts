import * as fs from "fs";
import { join } from "path";

export function getSlugs(path: string) {
  const files = fs.readdirSync(path);
  return files.map((file) => file.replace(/\.mdx$/, ""));
}

export async function readTextFile(baseDir: string, slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(baseDir, `${realSlug}.mdx`);
  const text = fs.readFileSync(fullPath, "utf8");
  return text;
}
