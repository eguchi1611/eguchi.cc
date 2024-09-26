import { PropsWithChildren } from "react";
import Script from "next/script";

import "./globals.scss";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ja">
      <body>{children}</body>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
        integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
        crossOrigin="anonymous"
      />
    </html>
  );
}
