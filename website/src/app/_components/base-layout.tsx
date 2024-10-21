import type { PropsWithChildren } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export function BaseLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="mx-auto min-h-screen max-w-7xl px-6 pt-6">{children}</main>
      <Footer />
    </>
  );
}
