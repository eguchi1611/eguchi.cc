"use client";

import { IconBrandLine, IconBrandMeta, IconBrandX } from "@tabler/icons-react";
import DesktopToc from "./DesktopToc";

export default function DesktopHeader() {
  return (
    <div className="flex h-full min-w-24 flex-col gap-8 bg-teal-100 bg-opacity-50 px-4 py-8">
      <div className="flex-1"></div>
      <DesktopToc />
      <div className="flex w-full flex-col items-center gap-8 text-teal-300">
        <div className="select-none text-sm font-bold uppercase tracking-widest [writing-mode:vertical-rl]">
          Share
        </div>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <IconBrandLine />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <IconBrandX />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <IconBrandMeta />
        </a>
      </div>
    </div>
  );
}
