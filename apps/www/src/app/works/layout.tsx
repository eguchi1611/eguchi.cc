import { PropsWithChildren } from "react";

import { Layout as ParentLayout } from "@/layouts/Layout";
import { WorkHeader } from "./_components/Header";

export default function WorkLayout({ children }: PropsWithChildren) {
  return (
    <ParentLayout>
      <div className="fixed inset-x-0 top-0 z-50">
        <WorkHeader />
      </div>
      <div className="mx-auto max-w-2xl px-2 pt-16">{children}</div>
    </ParentLayout>
  );
}
