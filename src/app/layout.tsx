import { PropsWithChildren } from "react";
import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";

const noto_sans_jp = Noto_Sans_JP({ subsets: ["latin"] });

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ja">
      <body className={noto_sans_jp.className}>{children}</body>
    </html>
  );
}
