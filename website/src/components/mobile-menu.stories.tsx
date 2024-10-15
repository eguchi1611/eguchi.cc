import { Meta, StoryObj } from "@storybook/react";
import { MobileMenu } from "./mobile-menu";

const meta = {
  title: "Components/MobileMenu",
  component: MobileMenu,
} satisfies Meta<typeof MobileMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    isOpen: true,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    handleClose: () => {},
  },
};
