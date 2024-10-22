import { PropsWithChildren } from "react";

export default function BlogLayout({ children }: PropsWithChildren) {
  return <div className="prose">{children}</div>;
}
