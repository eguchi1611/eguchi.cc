import { IconChevronsUp } from "@tabler/icons-react";

const items = [
  { label: "Profile", href: "#profile" },
  { label: "Articles", href: "#articles" },
  { label: "CONTACT", href: "#" },
];

export function SubHeader() {
  return (
    <div className="h-12 bg-primary-100/70 backdrop-blur">
      <div className="container flex h-full">
        <a
          href="#top"
          className="flex items-center justify-center border-l border-l-primary-50 px-4 hover:bg-primary-200/70"
        >
          <IconChevronsUp />
        </a>
        <ul className="grid w-full auto-cols-fr grid-flow-col divide-x divide-primary-50 border-x border-x-primary-50">
          {items.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="flex h-full items-center justify-center hover:bg-primary-200/70"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
