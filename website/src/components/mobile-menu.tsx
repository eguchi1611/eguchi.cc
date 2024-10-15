import { menu } from "@/constants";
import { CloseButton, Dialog, DialogPanel } from "@headlessui/react";
import { IconX } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  handleClose: () => void;
}

export function MobileMenu(props: MobileMenuProps) {
  const { handleClose } = props;
  const router = useRouter();

  const handleClick = useCallback(
    (href: string) => {
      router.push(href);
      handleClose();
    },
    [router, handleClose],
  );

  return (
    <Dialog open={props.isOpen} onClose={props.handleClose} className="fixed inset-0 z-50 bg-teal-50 p-4">
      <DialogPanel className="relative h-full">
        <CloseButton className="absolute right-0 -m-4 p-6">
          <IconX onClick={props.handleClose} />
        </CloseButton>
        <ul className="grid h-full place-items-center content-center divide-y">
          {menu.map((item) => (
            <li key={item.label}>
              <button onClick={() => handleClick(item.href)} className="block w-64 px-8 py-2 hover:underline">
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </DialogPanel>
    </Dialog>
  );
}
