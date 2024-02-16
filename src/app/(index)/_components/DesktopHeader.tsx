"use client";

import useSyncToc from "@/hooks/useSyncToc";
import { IconBrandLine, IconBrandMeta, IconBrandX } from "@tabler/icons-react";
import { tv } from "tailwind-variants";

const tocStyle = tv({
  base: "-ml-4 border-l-8 border-l-transparent pl-2 text-sm font-bold text-teal-800",
  variants: {
    active: {
      true: "border-l-teal-400 text-teal-400",
    },
  },
});

const tocItemList = [
  { id: "top", label: "Top" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "skill", label: "Skill" },
  { id: "contact", label: "Contact" },
];

const tocIdList = tocItemList.map((item) => item.id);

export default function DesktopHeader() {
  const { selected } = useSyncToc(tocIdList);

  return (
    <div className="flex h-full min-w-24 flex-col gap-8 bg-teal-100 px-4 py-8">
      <div className="flex-1"></div>
      <div>
        {tocItemList.map((item) => (
          <div
            key={item.id}
            className={tocStyle({ active: item.id === selected })}
          >
            <a href={`#${item.id}`}>{item.label}</a>
          </div>
        ))}
      </div>
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
