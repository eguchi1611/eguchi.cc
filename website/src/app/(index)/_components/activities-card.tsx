import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export const activities = [
  {
    date: "Mar. 2024",
    title: "team411の副代表に就任",
    description:
      "大学公認サークルであるteam411の副代表として、サークルの運営やイベントの企画運営、メンバーのサポートなどを行う",
  },
  {
    date: "Aug. 2023",
    title: "UECアイディア実証コンテスト 2023において協賛企業賞を受賞",
    description:
      "「模擬店における汎用的なモバイルオーダーシステムの提案」では株式会社ハートビーツ様より、「観光地活性化のための散策支援アプリの提案」では多摩信用金庫様より協賛企業賞を受賞",
  },
  {
    date: "Apr. 2023",
    title: "国立大学法人 電気通信大学に入学",
    description: "学校推薦型選抜にてI類メディア情報学プログラムへ",
  },
  {
    date: "Dec. 2021",
    title: "UECスクール 高大連携・高大連携基礎プログラミングを修了",
    description: "特別科目等履修生として「基礎プログラミングおよび演習」を受講",
  },
  {
    date: "Apr. 2021",
    title: "所属高校の生徒や先生方向けに作成",
    description:
      "Next.jsを用いた文化祭ホームページや、Google Apps Scriptを用いたGoogle DocsやSpreadsheetのためのユーティリティ作成など",
  },
  {
    date: "Apr. 2020",
    title: "八千代松陰高等学校に入学",
    description: "内部進学にて普通科IGSコースへ",
  },
  {
    date: "Aug. 2017",
    title: "Minecraft系のJava開発",
    description: "MODやBukkitプラグインを作成し配布など",
  },
];

export function ActivitiesCard() {
  return (
    <Card shadow="sm">
      <CardHeader>
        <h2 className="text-lg font-bold">Activities</h2>
      </CardHeader>
      <Divider />
      <CardBody>
        <ul className="relative space-y-4 before:absolute before:left-24 before:h-full before:border-l-8 before:border-default-100">
          {activities.map((item) => (
            <li key={item.title} className="flex items-start">
              <div className="w-28 flex-shrink-0">{item.date}</div>
              <div>
                <div className="relative before:absolute before:-left-4 before:h-full before:border-l-8 before:border-primary-200">
                  {item.title}
                </div>
                <div className="mt-1 text-sm">{item.description}</div>
              </div>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
}
