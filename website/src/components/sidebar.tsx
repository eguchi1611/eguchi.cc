import { menu } from "@/constants";
import Image from "next/image";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="w-64 divide-y rounded border bg-white">
      <Link href="/">
        <h1 className="py-4">
          <Image alt="logo" src="/logo.svg" width={317} height={39} className="mx-auto block h-6 w-auto" priority />
          <span className="sr-only">keitaito.net</span>
        </h1>
      </Link>
      <ul>
        {menu.map((item) => (
          <li key={item.label}>
            <Link className="block py-2 text-center" href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { Sidebar };
