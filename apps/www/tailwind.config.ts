import colors from "tailwindcss/colors";

import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.teal,
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
