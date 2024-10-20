import type { PropsWithChildren } from "react";
import { Header } from "./header";

export function BaseLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-6 pt-6">{children}</main>
    </>
  );
}
