import { PropsWithChildren } from "react";
import { Footer } from "./footer";
import { Sidebar } from "./sidebar";

function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="mx-auto flex max-w-5xl items-start px-2">
        <div className="sticky left-0 top-0 mr-4">
          <Sidebar />
        </div>
        <div className="pt-4">{children}</div>
      </div>
      <Footer />
    </>
  );
}

export { Layout };
