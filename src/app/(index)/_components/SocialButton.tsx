import { iconButton } from "@/styles/iconButton";
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
      className={iconButton({ color: "light" })}
    >
      {icon}
      {label}
    </a>
  );
}
