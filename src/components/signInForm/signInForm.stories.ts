import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { SignInForm } from ".";

const meta = {
  title: "Features/SignInForm",
  component: SignInForm,
  args: { onSubmit: fn() },
} satisfies Meta<typeof SignInForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
