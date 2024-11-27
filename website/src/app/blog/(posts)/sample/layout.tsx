import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Test post",
};

export default function TestPageLayout({ children }: PropsWithChildren) {
  return <>{children}</>;
}
