import { IconAt, IconBrandX, IconMail } from "@tabler/icons-react";

export function Contact() {
  return (
    <div className="flex h-full flex-col">
      <h2 className="mb-2 text-center text-xl font-bold text-gray-900">
        <a href="#contact" className="block">
          Contact
        </a>
      </h2>
      <ul className="grid flex-1 gap-4 lg:grid-cols-2 lg:place-items-center">
        <li>
          <div className="flex gap-2">
            <div className="rounded-full bg-primary-500 p-2 text-white">
              <IconMail />
            </div>
            <div className="flex items-center gap-1">
              contact
              <IconAt size={18} />
              eguchi.cc
            </div>
          </div>
        </li>
        <li>
          <a
            href="https://x.com/keita_ito_"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex gap-2"
          >
            <div className="rounded-full bg-primary-500 p-2 text-white">
              <IconBrandX />
            </div>
            <div className="flex items-center gap-1 group-hover:underline">
              @keita_ito_
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}
