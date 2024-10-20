import type { PropsWithChildren } from "react";
import { BaseLayout } from "./_components/base-layout";
import { Providers } from "./_components/providers";

import "./globals.css";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ja">
      <body>
        <Providers>
          <BaseLayout>{children}</BaseLayout>
        </Providers>
      </body>
    </html>
  );
}
