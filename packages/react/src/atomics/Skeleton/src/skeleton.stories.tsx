import type { Meta, StoryObj } from "@storybook/react";
import { skeleton } from "@bmg-ds/styles";
import { argTypesConvert } from ".storybook/utils";
import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Atomic/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {
    ...argTypesConvert(skeleton.properties),
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const base: Story = {
  args: {
    height: "3.125rem",
    width: "9.375rem",
    borderRadius: "full"
  },
};
