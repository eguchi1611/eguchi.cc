import { PropsWithChildren } from "react";

interface CardBaseProps {
  title: string;
}

function CardBase(props: PropsWithChildren<CardBaseProps>) {
  return (
    <div className="rounded border bg-white p-4">
      <h2 className="text-xl font-bold">{props.title}</h2>
      <div className="mt-2">{props.children}</div>
    </div>
  );
}

export { CardBase };
