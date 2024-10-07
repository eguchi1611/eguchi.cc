import { ActivitiesCard } from "./activities-card";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/ActivitiesCard",
  component: ActivitiesCard,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof ActivitiesCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
