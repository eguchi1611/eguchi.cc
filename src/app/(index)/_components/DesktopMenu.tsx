"use client";

import { Listbox, ListboxItem } from "@nextui-org/react";

const items = [
  { href: "#top", label: "Top" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skill", label: "Skill" },
  { href: "#contact", label: "Contact" },
];

function DesktopMenu() {
  return (
    <Listbox variant="light" classNames={{ list: "gap-0" }}>
      {items.map((item) => (
        <ListboxItem
          key={item.href}
          classNames={{ base: "p-0", title: "text-sm" }}
        >
          {item.label}
        </ListboxItem>
      ))}
    </Listbox>
  );
}

export default DesktopMenu;
