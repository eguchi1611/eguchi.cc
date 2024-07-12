const items = [
  {
    date: "2023/08",
    title: "U☆PoC～UECアイディア実証コンテスト～2023において協賛企業賞受賞",
    description:
      "「模擬店における汎用的なモバイルオーダーシステムの提案」では株式会社ハートビーツ様より、「観光地活性化のための散策支援アプリの提案」では多摩信用金庫様より協賛企業賞を受賞しました",
  },
  {
    date: "2023/04",
    title: "電気通信大学入学",
    description: "これまでの経歴を活かし学校推薦型選抜で入学",
  },
  {
    date: "2021",
    title: "UECスクール 高大連携・高大連携基礎プログラミングを修了",
    description: "特別科目等履修生として「基礎プログラミングおよび演習」を受講",
  },
  {
    date: "2021",
    title: "所属高校の生徒や先生方向けに複数ソフトウェアを作成",
    description:
      "Next.jsを用いた文化祭ホームページや、Google Apps Scriptを用いたGoogle DocsやSpreadsheetのためのユーティリティ作成など",
  },
  {
    date: "2020/04",
    title: "八千代松陰高等学校入学",
    description: "普通科IGSコースに入学",
  },
  {
    date: "2017",
    title: "本格的にプログラミングに興味を持った",
    description: "JavaでマイクラのMOD・Bukkitプラグインを作成し配布など",
  },
];

export function Activities() {
  return (
    <div className="flex h-full flex-col">
      <h2 className="mb-2 text-center text-xl font-bold text-gray-900">
        <a href="#activities" className="block">
          Activities
        </a>
      </h2>
      <ul className="grid flex-1">
        {items.map(({ date, title, description }) => (
          <li key={title} className="relative flex items-start py-2">
            <div className="absolute left-20 h-full w-2 bg-gray-100">
              {/* vertical bar (gray) */}
            </div>
            <div className="w-24">{date}</div>
            <div className="flex-1">
              <div className="relative mb-1 flex flex-col">
                {title}
                <div className="absolute -left-4 h-full w-2 bg-primary-300">
                  {/* vertical bar (primary color) */}
                </div>
              </div>
              <div className="text-sm">{description}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
