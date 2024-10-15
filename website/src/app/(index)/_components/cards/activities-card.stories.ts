import { activities } from "@/constants";
import { ActivitiesCard } from "./activities-card";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/ActivitiesCard",
  component: ActivitiesCard,
} satisfies Meta<typeof ActivitiesCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    activities: [
      {
        date: "2024年3月",
        title: "コミュニティテックワークショップ",
        description:
          "高校生向けにテックワークショップを開催し、Pythonの基礎的なプログラミングスキルを教えました。50名が参加し、実際にコードを書く体験が含まれていました。",
      },
      {
        date: "2024年1月",
        title: "スタートアップピッチコンテスト",
        description:
          "メンタルヘルス意識向上を目的としたモバイルアプリを発表し、大学のスタートアップピッチコンテストに参加しました。2位を獲得し、今後の開発資金を得ました。",
      },
      {
        date: "2023年11月",
        title: "ハッカソンメンター",
        description:
          "48時間のハッカソンで、高校生チームにフロントエンド開発のアドバイスをし、彼らのWebアプリにAPIを統合する手助けをしました。",
      },
      {
        date: "2023年9月",
        title: "研究論文発表",
        description:
          "全国学会でAIと倫理に関する研究論文を発表し、法的文脈における自律システムの影響について議論しました。参加者から好意的なフィードバックを受けました。",
      },
      {
        date: "2023年7月",
        title: "AI開発インターンシップ",
        description:
          "AIスタートアップで3ヶ月間のインターンを行い、音声認識の精度を向上させる機械学習モデルに取り組みました。システム効率を15%向上させたプロジェクトに貢献しました。",
      },
    ],
  },
};

export const Active: Story = {
  args: { activities },
};

export const Empty: Story = {};

export const LongText: Story = {
  args: {
    activities: [
      {
        date: "Mar. 2024",
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
};
