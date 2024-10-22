import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { BaseLayout } from "./_components/base-layout";
import { Providers } from "./_components/providers";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s - Keita Ito",
    default: "Keita Ito",
  },
  description: "伊藤 啓太 (いとう けいた)のポートフォリオサイト",
  alternates: {
    canonical: "https://keitaito.net",
  },
};

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
