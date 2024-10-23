import { getArticleContentByPath } from "@/utils/article-utils";
import * as fs from "fs";
import * as path from "path";

export function useArticleContent(articlePath: string) {
  const content = getArticleContentByPath(articlePath);
  return content;
}

export function useAllArticlesContent() {
  // src/app/blog/(posts)の中のファイルを再帰的に全て取得
  // ディレクトリの中も含めて全てのファイルを取得
  const postsDir = path.join(process.cwd(), "src/app/blog/(posts)");
  const paths = fs.readdirSync(postsDir, { withFileTypes: true }).flatMap((dirent) => {
    if (dirent.isDirectory()) {
      const dirPath = path.join(postsDir, dirent.name);
      return fs.readdirSync(dirPath, { withFileTypes: true }).map((dirent) => path.join(dirPath, dirent.name));
    } else {
      return path.join(postsDir, dirent.name);
    }
  });
  console.log(paths);

  return paths.map((path) => getArticleContentByPath(path));
}
