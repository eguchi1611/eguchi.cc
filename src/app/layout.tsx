import { PropsWithChildren } from "react";
import "./globals.css";
import { Providers } from "./_components/Providers";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ja">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
