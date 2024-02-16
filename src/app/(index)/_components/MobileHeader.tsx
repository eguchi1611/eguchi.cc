import { IconMenu2 } from "@tabler/icons-react";

export default function MobileHeader() {
  return (
    <div className="flex min-h-16 bg-teal-200">
      <button className="flex w-16 items-center justify-center bg-red-200">
        <IconMenu2 size={36} stroke={1} />
      </button>
    </div>
  );
}