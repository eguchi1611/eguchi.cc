"use client";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let articles: any = [];

export function ArticlesViewer() {
  const fetchArticles = async () => {
    const response = await fetch(
      "https://d1m35rf7o2ahoz.cloudfront.net/api/articles",
    );
    articles = await response.json();
  };
  if (articles.length === 0) throw fetchArticles();
  return <div>{JSON.stringify(articles)}</div>;
}
