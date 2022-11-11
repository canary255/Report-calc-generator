import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ButtonOption } from ".";

export default {
  title: "Atom/Button",
  component: ButtonOption,
  argTypes: {},
} as ComponentMeta<typeof ButtonOption>;

const Template: ComponentStory<typeof ButtonOption> = (args) => (
  <ButtonOption {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Default Primary",
};

export const Disabled = Template.bind({});
Disabled.args = {
  backgroundColor: "inherit",
  label: "Disabled",
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

export const CustomSize = Template.bind({});
CustomSize.args = {
  height: 100,
  width: 100,
  label: "Button",
};

export const RoundedBorder = Template.bind({});
RoundedBorder.args = {
  borderRadius: "all",
  label: "Button",
};

export const CustomBorderSide = Template.bind({});
CustomBorderSide.args = {
  borderRadius: "left",
  label: "Button",
  width: 50,
  height: 50,
};
