import Link from "next/link";

export function MobileHeader() {
  return (
    <header className="flex h-full items-center px-4">
      <Link href="/" className="mr-auto h-full py-4">
        <img
          src="/logo.svg"
          alt="logo"
          width="96.48"
          height="21.26"
          className="h-full w-auto"
          aria-label="logo"
        />
      </Link>
    </header>
  );
}
