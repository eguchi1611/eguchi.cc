import { Card, CardBody, CardHeader, Divider, Link } from "@nextui-org/react";
import { IconHeart } from "@tabler/icons-react";
import Image from "next/image";

export async function ArticlesCard() {
  const articles = [...(await getZennArticles()), ...(await getQiitaArticles())]
    .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime())
    .slice(0, 5);

  return (
    <Card shadow="sm">
      <CardHeader>
        <h2 className="text-lg font-bold">Articles</h2>
      </CardHeader>
      <Divider />
      <CardBody>
        <ul>
          {articles.map((article) => (
            <li key={article.url}>
              <Link isExternal color="foreground" href={article.url} className="group flex items-center p-2">
                {
                  {
                    zenn: <ZennIcon />,
                    qiita: <QiitaIcon />,
                  }[article.from]
                }
                <div className="ml-2">
                  <div className="group-hover:underline">{article.title}</div>
                  <div className="flex text-sm text-default-600">
                    <span className="w-20">{new Date(article.published_at).toLocaleDateString("ja-JP")}</span>
                    <span className="ml-2">
                      <IconHeart size={16} className="inline" />
                      <span className="ml-1">{article.liked_count}</span>
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
}

interface Article {
  title: string;
  url: string;
  liked_count: number;
  published_at: string;
  from: "zenn" | "qiita";
}

async function getZennArticles(): Promise<Article[]> {
  const url = "https://zenn.dev/api/articles?page=1&username=kk79it&count=96&order=latest";
  const res = await fetch(url).then((res) => res.json());

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (res.articles as any[]).map<Article>((article) => ({
    title: article.title,
    url: `https://zenn.dev${article.path}`,
    liked_count: article.liked_count,
    published_at: article.published_at,
    from: "zenn",
  }));
}

async function getQiitaArticles(): Promise<Article[]> {
  const url = "https://qiita.com/api/v2/items?page=1&per_page=100&query=user:eguchi1611";
  const res = await fetch(url).then((res) => res.json());

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (res as any[]).map<Article>((article) => ({
    title: article.title,
    url: article.url,
    liked_count: article.likes_count,
    published_at: article.created_at,
    from: "qiita",
  }));
}

function ZennIcon() {
  return <Image src="/zenn.svg" width={88.3} height={88.3} alt="Zenn" className="h-auto w-6 flex-shrink-0" />;
}

function QiitaIcon() {
  return <Image src="/qiita.svg" width={400} height={400} alt="Qiita" className="h-auto w-6 flex-shrink-0" />;
}
