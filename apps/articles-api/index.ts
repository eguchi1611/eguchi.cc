import { Context, APIGatewayProxyResult, APIGatewayEvent } from "aws-lambda";

interface Article {
  title: string;
  publishedAt: string;
  url: string;
  likesCount: number;
}

export const handler = async (
  event: APIGatewayEvent,
  context: Context,
): Promise<APIGatewayProxyResult> => {
  console.log(`Event: ${JSON.stringify(event, null, 2)}`);
  console.log(`Context: ${JSON.stringify(context, null, 2)}`);
  const articles: Array<Article> = [];
  try {
    articles.push(...(await getZennArticles()));
  } catch (e) {
    console.error(e);
  }
  return {
    statusCode: 200,
    body: JSON.stringify({ articles }),
  };
};

async function getZennArticles(): Promise<Array<Article>> {
  const response = await fetch("https://zenn.dev/api/articles?page=1&username=kk79it&count=96&order=latest");
  const data = await response.json();
  const articles: Array<Article> = data.articles.map((article) => {
    return {
      title: article.title || "Notitle",
      publishedAt: article.published_at,
      url: "https://zenn.dev" + article.path,
      likesCount: article.liked_count,
    };
  });
  return articles;
}
