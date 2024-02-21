import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CodeIcon } from "@bmg-ds/icons";
import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Atomics/Icon",
  component: Icon,
  argTypes: {
    source: { control: { disable: true } },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const basic: Story = {
  args: {
    source: <CodeIcon />,
    color: "primary-textLow",
  },
};

export const large: Story = {
  args: {
    source: <CodeIcon size="large" />,
    color: "primary-textLow",
  },
};

export const medium: Story = {
  args: {
    source: <CodeIcon size="medium" />,
    color: "primary-textLow",
  },
};

export const small: Story = {
  args: {
    source: <CodeIcon size="small" />,
    color: "primary-textLow",
  },
};
