import posts from "./sample-posts.json";

import zennIcon from "../_assets/zenn-color.svg";
import Image from "next/image";
import { IconHeart } from "@tabler/icons-react";

const articles = posts.articles.splice(0, 6);

export function Posts() {
  return (
    <div className="flex h-full flex-col">
      <h2 className="mb-2 text-center text-xl font-bold text-gray-900">
        <a href="#posts" className="block">
          Articles
        </a>
      </h2>
      <div className="grid flex-1 divide-y">
        {articles.map((article) => (
          <a
            key={article.slug}
            href={"https://zenn.dev" + article.path}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-2"
          >
            <div>
              <Image
                src={zennIcon.src}
                alt="Zenn"
                width={88.3}
                height={88.3}
                className="h-6 w-6"
              />
            </div>
            <div className="flex-1">
              <div className="group-hover:underline">{article.title}</div>
              <div className="flex items-center">
                <div className="text-sm">
                  {new Date(article.published_at).toLocaleDateString("ja-JP", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </div>
                <IconHeart size={16} className="ml-4" />
                <div className="ml-1 text-sm">{article.liked_count}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
