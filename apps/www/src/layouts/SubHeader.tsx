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
      <ul className="grid w-full auto-cols-fr grid-flow-col divide-x divide-primary-50 border-x">
        {items.map(({ label }) => (
          <li key={label}>
            <Link
              href="#"
              className="flex h-full items-center justify-center bg-primary-100/70 hover:bg-primary-200/70"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
