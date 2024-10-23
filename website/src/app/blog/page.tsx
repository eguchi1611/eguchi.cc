import { Metadata } from "next";
import { useAllArticlesContent } from "./(posts)/_hooks/use-article-content";

export const metadata: Metadata = {
  title: "記事一覧",
};

export default function BlogPage() {
  const a = useAllArticlesContent();
  console.log(a);

  return "工事中";
}
