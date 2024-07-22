import { PropsWithChildren } from "react";
import { Footer } from "./Footer";

export function Layout({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <div className="mt-4">
        <Footer />
      </div>
    </>
  );
}
