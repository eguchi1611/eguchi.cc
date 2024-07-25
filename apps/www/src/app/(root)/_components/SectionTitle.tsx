import { IconSectionSign } from "@tabler/icons-react";

interface Props {
  label: string;
  href: string;
}

export function SectionTitle(props: Props) {
  return (
    <div className="text-xl font-bold">
      <a href={props.href} className="group flex items-center gap-1">
        <IconSectionSign className="group-hover:animate-spin" />
        {props.label}
      </a>
    </div>
  );
}
