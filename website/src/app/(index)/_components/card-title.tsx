import type { PropsWithChildren } from "react";

export function CardTitle({ children }: PropsWithChildren) {
  return <h2 className="text-xl font-bold">{children}</h2>;
}
