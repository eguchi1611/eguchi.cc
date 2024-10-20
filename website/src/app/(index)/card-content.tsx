import type { PropsWithChildren } from "react";

export function CardContent({ children }: PropsWithChildren) {
  return <div className="mt-2">{children}</div>;
}
