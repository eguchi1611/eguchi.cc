import { PropsWithChildren } from "react";

import "./globals.css";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ja" className="scroll-pt-16 scroll-smooth">
      <body className="bg-primary-50 text-foreground">{children}</body>
    </html>
  );
}
