import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.teal,
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("@tailwindcss/typography"),
    nextui({
      themes: {
        light: {
          colors: {
            background: colors.teal[50],
            foreground: colors.slate[700],
          },
        },
      },
    }),
  ],
} satisfies Config;
