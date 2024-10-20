import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: ({ colors }) => ({
      gray: colors.slate,
    }),
    extend: {},
  },
  plugins: [
    nextui({
      layout: {
        radius: {
          small: "0.15rem",
          medium: "0.25rem",
          large: "0.5rem",
        },
      },
      themes: {
        light: {
          colors: {
            primary: colors.teal,
          },
        },
        dark: {
          colors: {
            primary: colors.teal,
          },
        },
      },
    }),
  ],
  darkMode: "class",
} satisfies Config;
