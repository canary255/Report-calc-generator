import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ButtonOption } from "./Button";

export default {
  title: "Atom/Button",
  component: ButtonOption,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ButtonOption>;

const Template: ComponentStory<typeof ButtonOption> = (args) => (
  <ButtonOption {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Default Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  backgroundColor: "secondary",
  label: "Secondary",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
