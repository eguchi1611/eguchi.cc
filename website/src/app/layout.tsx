import { Layout } from "@/components/layout";
import { PropsWithChildren } from "react";

import "./globals.css";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ja">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
