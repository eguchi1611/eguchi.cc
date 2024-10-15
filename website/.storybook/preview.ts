import type { Preview } from "@storybook/react";
import "../src/app/globals.css";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default preview;
