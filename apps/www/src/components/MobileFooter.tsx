import { socials } from "@/constants";

export function MobileFooter() {
  return (
    <footer className="flex flex-col gap-2 py-8">
      <ul className="flex justify-center gap-2">
        {socials.map(({ alt, ...props }) => (
          <li key={alt}>
            <a
              className="block p-1"
              href={props.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={alt}
            >
              <img {...props} alt={alt} className="h-8 w-auto" />
            </a>
          </li>
        ))}
      </ul>
      <p className="text-center">(c) 2021 Keita Ito</p>
    </footer>
  );
}
