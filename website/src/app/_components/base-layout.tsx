import type { PropsWithChildren } from "react";
import { Header } from "./header";

export function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-6">{children}</main>
    </>
  );
}
