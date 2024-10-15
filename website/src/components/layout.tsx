import { PropsWithChildren } from "react";
import { Footer } from "./footer";
import { Sidebar } from "./sidebar";
import { MobileHeader } from "./mobile-header";

function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="fixed left-0 top-0 z-10 w-full border-b md:hidden">
        <div className="mx-auto max-w-5xl bg-white">
          <MobileHeader />
        </div>
      </div>
      <div className="mx-auto flex max-w-5xl items-start px-4">
        <div className="sticky left-0 top-0 mr-4 hidden pt-4 md:block">
          <Sidebar />
        </div>
        <div className="min-h-screen pt-20 md:pt-4">{children}</div>
      </div>
      <Footer />
    </>
  );
}

export { Layout };
