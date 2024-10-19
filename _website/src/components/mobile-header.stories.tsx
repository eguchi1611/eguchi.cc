import { Meta, StoryObj } from "@storybook/react";
import { MobileHeader } from "./mobile-header";

const meta = {
  title: "Components/MobileHeader",
  component: MobileHeader,
} satisfies Meta<typeof MobileHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
