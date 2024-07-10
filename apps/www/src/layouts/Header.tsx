import { IconChevronsUp } from "@tabler/icons-react";

const items = [
  { label: "Works", href: "#works" },
  { label: "Posts", href: "#posts" },
];

export function Header() {
  return (
    <div className="container px-2">
      <div className="box flex h-12 divide-x rounded-t-none p-0">
        <a href="#top" className="grid place-items-center px-4">
          <IconChevronsUp />
        </a>
        <div className="grid flex-1 auto-cols-fr grid-flow-col divide-x">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="grid place-items-center px-4 text-center"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
