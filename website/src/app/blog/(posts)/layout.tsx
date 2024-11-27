import type { PropsWithChildren } from "react";

export default function PostLayout({ children }: PropsWithChildren) {
  return <div className="prose prose-slate max-w-none">{children}</div>;
}
