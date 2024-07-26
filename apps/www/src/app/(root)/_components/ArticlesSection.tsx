import { IconHeart } from "@tabler/icons-react";
import styles from "./Section.module.css";
import { SectionTitle } from "./SectionTitle";

interface Article {
  id: string;
  title: string;
  likes_count: number;
  published_at: Date;
  source: "zenn" | "qiita";
  href: string;
}

export async function ArticleSection() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const zenn: any[] = await fetch(
    "https://zenn.dev/api/articles?page=1&username=kk79it&count=96&order=latest",
  )
    .then((res) => res.json())
    .then((res) => res.articles);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const qiita: any[] = await fetch(
    "https://qiita.com/api/v2/items?page=1&per_page=100&query=user:eguchi1611",
  ).then((res) => res.json());

  const articles: Article[] = [
    ...zenn.map<Article>((article) => ({
      id: article?.id || crypto.randomUUID(),
      title: article?.title || "Notitle",
      likes_count: article?.liked_count || 0,
      published_at: new Date(article.published_at || new Date()),
      source: "zenn",
      href: "https://zenn.dev" + article.path,
    })),
    ...qiita.map<Article>((article) => ({
      id: article?.id || crypto.randomUUID(),
      title: article?.title || "Notitle",
      likes_count: article?.likes_count || 0,
      published_at: new Date(article.created_at || new Date()),
      source: "qiita",
      href: article.url,
    })),
  ].sort((a, b) => b.published_at.getTime() - a.published_at.getTime());

  return (
    <section className={styles.section}>
      <SectionTitle href="articles" label="Articles" />
      <ul className="divide-y">
        {articles.slice(0, 6).map((article) => (
          <li key={article.id}>
            <a
              className="clickable flex items-center gap-4 px-4 py-3"
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {
                {
                  zenn: (
                    <img
                      src="/zenn.svg"
                      alt="zenn"
                      width="88.3"
                      height="88.3"
                      className="h-auto w-6"
                      aria-hidden="true"
                    />
                  ),
                  qiita: (
                    <img
                      src="/qiita.svg"
                      alt="qiita"
                      width="400"
                      height="400"
                      className="h-auto w-6"
                      aria-hidden="true"
                    />
                  ),
                }[article.source]
              }
              <div className="flex flex-1 flex-col">
                <h3>{article?.title || ""}</h3>
                <p className="flex items-center gap-2 text-sm">
                  <span>
                    {article.published_at.toLocaleDateString("ja-JP", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <IconHeart size={16} aria-hidden="true" />
                  <span>{article.likes_count}</span>
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
