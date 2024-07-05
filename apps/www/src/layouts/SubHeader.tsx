const items = [
  { label: "HOME", href: "#" },
  { label: "Profile", href: "#profile" },
  { label: "ABOUT", href: "#" },
  { label: "CONTACT", href: "#" },
];

export function SubHeader() {
  return (
    <div className="flex h-12 backdrop-blur">
      <ul className="grid w-full auto-cols-fr grid-flow-col divide-x divide-primary-50 border-x">
        {items.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="flex h-full items-center justify-center bg-primary-100/70 hover:bg-primary-200/70"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
