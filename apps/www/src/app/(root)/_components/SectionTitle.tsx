import { IconSectionSign } from "@tabler/icons-react";

interface Props {
  label: string;
  href: string;
}

export function SectionTitle(props: Props) {
  return (
    <div className="text-xl font-bold" id={props.href}>
      <a href={`#${props.href}`} className="group flex items-center gap-1">
        <IconSectionSign className="group-hover:animate-ping" />
        {props.label}
      </a>
    </div>
  );
}
