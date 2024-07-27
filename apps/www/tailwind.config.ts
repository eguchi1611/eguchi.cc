import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.teal,
        secondary: colors.blue,
        foreground: {
          DEFAULT: colors.slate[700],
          ...colors.slate,
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
