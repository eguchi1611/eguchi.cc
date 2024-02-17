import { IconMenu2 } from "@tabler/icons-react";

export default function MobileHeader() {
  return (
    <div className="flex min-h-16 bg-teal-100 bg-opacity-50">
      <button className="flex w-16 items-center justify-center">
        <IconMenu2 size={36} stroke={1} />
      </button>
    </div>
  );
}
