"use client";

import { Dialog } from "@headlessui/react";
import { IconMenu2 } from "@tabler/icons-react";
import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="flex w-16 items-center justify-center"
        onClick={() => setIsOpen((c) => !c)}
      >
        <IconMenu2 size={36} stroke={1} />
      </button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="fixed bottom-0 left-0 right-0 top-16 z-20">
          <Dialog.Panel>
            <p>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed. This action cannot be undone.
            </p>
            <button onClick={() => setIsOpen(false)}>Cancel</button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
