import { tv } from "tailwind-variants";

export const button = tv({
  base: "rounded border px-2 py-1 text-center font-semibold",
  variants: {
    color: {
      light: "bg-white",
    },
  },
});
