import { tv } from "tailwind-variants";
import { button } from "./button";

export const iconButton = tv({
  extend: button,
  base: "flex items-center gap-2",
});
