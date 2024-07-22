import { PropsWithChildren } from "react";

import "./globals.css";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ja" className="scroll-smooth scroll-pt-16">
      <body className="text-foreground bg-primary-50">{children}</body>
    </html>
  );
}
