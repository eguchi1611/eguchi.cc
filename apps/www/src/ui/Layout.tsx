import { DesktopSidebar } from "@/components/DesktopSidebar";
import { MobileFooter } from "@/components/MobileFooter";
import { MobileHeader } from "@/components/MobileHeader";
import { PropsWithChildren } from "react";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="lg:bg-main" id="top">
      <div className="fixed inset-x-0 top-0 z-10 h-16 border-b bg-white lg:hidden">
        <MobileHeader />
      </div>
      <div className="mx-auto flex pt-16 lg:container lg:pt-0">
        <div className="sticky top-0 hidden h-screen w-56 border-r bg-white lg:block">
          <DesktopSidebar />
        </div>
        <div className="flex-1 bg-teal-50">
          {children}
          <div className="pb-4 text-center">(c) 2021 Keita Ito</div>
        </div>
      </div>
      <div className="mx-auto bg-primary-100 px-4 lg:container lg:hidden">
        <MobileFooter />
      </div>
    </div>
  );
}
