"use client";

import { IconMenu2 } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { MobileMenu } from "./mobile-menu";

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <div className="flex h-16 items-center bg-white px-4">
        <Link href="/">
          <Image alt="" src="/logo.svg" width={317} height={39} className="block h-6 w-auto" />
        </Link>
        <button type="button" className="ml-auto border-slate-700 p-2" onClick={() => setIsOpen(true)}>
          <IconMenu2 />
        </button>
      </div>
      <MobileMenu handleClose={handleClose} isOpen={isOpen} />
    </>
  );
}
