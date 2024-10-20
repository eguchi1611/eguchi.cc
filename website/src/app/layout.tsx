import { PropsWithChildren } from "react";
import { Layout } from "./_components/layout";
import { Providers } from "./_components/providers";

import "./globals.css";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ja">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
