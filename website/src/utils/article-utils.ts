import * as fs from "fs";
import matter from "gray-matter";

export function getArticleContentByPath(articlePath: string) {
  const file = fs.readFileSync(articlePath, "utf-8");
  const { content } = matter(file);
  return content;
}
