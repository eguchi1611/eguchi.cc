import { PropsWithChildren } from "react";

import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "eguchi.cc",
    template: "%s | eguchi.cc",
  },
  description: "Keita Ito's personal website",
  alternates: { canonical: "https://www.eguchi.cc/" },
  openGraph: {
    type: "profile",
    firstName: "Keita",
    lastName: "Ito",
    username: "えぐち",
  },
  keywords: ["personal website"],
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ja" className="scroll-pt-16 scroll-smooth">
      <body className="bg-primary-50 text-foreground">{children}</body>
    </html>
  );
}
