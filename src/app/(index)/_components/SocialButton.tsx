import { ReactNode } from "react";

type Props = {
  href: string;
  label: string;
  icon: ReactNode;
};

export default function SocialButton({ href, label, icon }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 rounded border bg-white px-2 py-1 hover:bg-slate-50"
    >
      {icon}
      {label}
    </a>
  );
}
