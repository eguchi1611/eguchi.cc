import { IconChevronsUp } from "@tabler/icons-react";

const items = [
  { label: "Works", href: "#works" },
  { label: "Posts", href: "#posts" },
];

export function Header() {
  return (
    <div className="box container flex divide-x p-0">
      <a href="#top" className="px-4 py-2">
        <IconChevronsUp />
      </a>
      <div className="grid flex-1 auto-cols-fr grid-flow-col divide-x">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="px-4 py-2 text-center"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
