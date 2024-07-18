import { Layout as ParentLayout } from "@/layouts/Layout";
import { PropsWithChildren } from "react";

export default function WorkLayout({ children }: PropsWithChildren) {
  return (
    <ParentLayout>
      <div className="container px-2">{children}</div>
    </ParentLayout>
  );
}
