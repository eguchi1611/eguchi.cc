import useToc from "@/hooks/useToc";
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

export default function DesktopToc() {
  const { selected } = useToc(tocIdList);

  return (
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
  );
}
