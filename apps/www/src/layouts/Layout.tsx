import { PropsWithChildren } from "react";

import { Header } from "./Header";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <div className="fixed inset-x-0 top-0">
        <Header />
      </div>
      {children}
    </div>
  );
}
