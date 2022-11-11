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
  children: "Default Primary",
};

export const Disabled = Template.bind({});
Disabled.args = {
  backgroundColor: "inherit",
  children: "Disabled",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  children: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  children: "Button",
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  height: 100,
  width: 100,
  children: "Button",
};

export const RoundedBorder = Template.bind({});
RoundedBorder.args = {
  borderRadius: "all",
  children: "Button",
};

export const CustomBorderSide = Template.bind({});
CustomBorderSide.args = {
  borderRadius: "left",
  children: "Button",
  width: 50,
  height: 50,
};
