import { IconHome, IconMessage, IconNotebook } from "@tabler/icons-react";
import Link from "next/link";

const items = [
  { label: "Home", Icon: IconHome, href: "/" },
  { label: "Articles", Icon: IconNotebook, href: "#" },
  { label: "Contact", Icon: IconMessage, href: "#" },
];

export function Header() {
  return (
    <div className="flex h-16 bg-primary-500/50 shadow-sm backdrop-blur">
      <div className="container my-auto px-4">
        <ul className="flex gap-2 p-2">
          {items.map(({ label, Icon, href }) => (
            <li key={label}>
              <Link href={href} className="flex items-center gap-2">
                <Icon />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
