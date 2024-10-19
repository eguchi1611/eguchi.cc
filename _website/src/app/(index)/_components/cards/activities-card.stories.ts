import { activities } from "@/constants";
import { ActivitiesCard } from "./activities-card";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/ActivitiesCard",
  component: ActivitiesCard,
} satisfies Meta<typeof ActivitiesCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: { activities },
};

export const LongText: Story = {
  args: {
    activities: [
      {
        date: "Mar. 2024",
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
};

export const Empty: Story = {};
