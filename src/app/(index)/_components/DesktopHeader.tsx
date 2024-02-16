import { IconBrandLine, IconBrandMeta, IconBrandX } from "@tabler/icons-react";

export default function DesktopHeader() {
  return (
    <div className="flex h-full min-w-32 flex-col gap-8 bg-teal-300 px-4 py-8">
      <div className="flex-1"></div>
      <div className="text-sm font-bold uppercase">
        <div className="">Top</div>
        <div>About</div>
        <div>Work</div>
        <div>Skill</div>
        <div>Contact</div>
      </div>
      <div className="flex w-full flex-col items-center gap-8 text-teal-500">
        <div className="text-sm [writing-mode:vertical-rl]">Share</div>
        <IconBrandLine />
        <IconBrandX />
        <IconBrandMeta />
      </div>
    </div>
  );
}
