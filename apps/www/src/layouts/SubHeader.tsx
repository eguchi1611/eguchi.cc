import Link from "next/link";

const items = [
  { label: "HOME" },
  { label: "WORKS" },
  { label: "ABOUT" },
  { label: "CONTACT" },
];

export function SubHeader() {
  return (
    <div className="flex h-12 backdrop-blur">
      <ul className="container grid auto-cols-fr grid-flow-col divide-x border-x">
        {items.map(({ label }) => (
          <li key={label}>
            <Link href="#" className="flex h-full items-center justify-center">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
