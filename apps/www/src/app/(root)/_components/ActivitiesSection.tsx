import { SectionTitle } from "./SectionTitle";

import styles from "./Section.module.css";

const items = [
  {
    date: "Aug 2017",
    title: "Minecraft系のJava開発",
    description: "MODやBukkitプラグインを作成し配布など",
  },
  {
    date: "Apr 2020",
    title: "八千代松陰高等学校に入学",
    description: "内部進学にて普通科IGSコースへ",
  },
  {
    date: "Apr 2021",
    title: "所属高校の生徒や先生方向けに作成",
    description:
      "Next.jsを用いた文化祭ホームページや、Google Apps Scriptを用いたGoogle DocsやSpreadsheetのためのユーティリティ作成など",
  },
  {
    date: "2021 Dec",
    title: "UECスクール 高大連携・高大連携基礎プログラミングを修了",
    description: "特別科目等履修生として「基礎プログラミングおよび演習」を受講",
  },
  {
    date: "2023 Apr",
    title: "国立大学法人 電気通信大学に入学",
    description: "学校推薦型選抜にてI類メディア情報学プログラムへ",
  },
  {
    date: "2023 Aug",
    title: "UECアイディア実証コンテスト 2023において協賛企業賞を受賞",
    description:
      "「模擬店における汎用的なモバイルオーダーシステムの提案」では株式会社ハートビーツ様より、「観光地活性化のための散策支援アプリの提案」では多摩信用金庫様より協賛企業賞を受賞",
  },
  {
    date: "2024 Mar",
    title: "team411の副代表に就任",
    description:
      "大学公認サークルであるteam411の副代表として、サークルの運営やイベントの企画運営、メンバーのサポートなどを行う",
  },
] as const;

export function ActivitiesSection() {
  return (
    <div className={styles.section}>
      <SectionTitle href="activities" label="Activities" />
      <div className="relative flex flex-col-reverse">
        <div className="absolute left-28 h-full w-2 bg-slate-100">
          {/* Vertical line */}
        </div>
        {items.map(({ date, title, description }) => (
          <div key={title} className="flex px-4 py-3">
            <div className="min-w-28">{date}</div>
            <div className="flex-1">
              <div className="relative">
                <div className="absolute -left-4 h-full w-2 bg-primary-200">
                  {/* Vertical bar (primary color) */}
                </div>
                {title}
              </div>
              <div className="text-sm">{description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
