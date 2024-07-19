import { Header } from "@/layouts/Header";
import { Layout as ParentLayout } from "@/layouts/Layout";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <ParentLayout>
      <div className="fixed inset-x-0 top-0 z-50">
        <Header />
      </div>
      {children}
    </ParentLayout>
  );
}
