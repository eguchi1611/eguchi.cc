import Image from "next/image";
import Link from "next/link";

export function WorkHeader() {
  return (
    <div className="border-b bg-primary-50 py-2">
      <div className="container flex items-center gap-4 px-2">
        <Link href="/">
          <Image
            alt="Logo"
            width={96.48}
            height={21.26}
            src="/logo.svg"
            className="h-8 w-auto"
          />
        </Link>
        <Link href="/works">
          <span className="p-1 text-xl font-bold hover:underline">Works</span>
        </Link>
      </div>
    </div>
  );
}
