import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { RoundedImage } from "./RoundedImage";

export default {
  title: "Atom/RoundedImage",
  component: RoundedImage,
  argTypes: {},
} as ComponentMeta<typeof RoundedImage>;

const Template: ComponentStory<typeof RoundedImage> = (args) => (
  <RoundedImage {...args} />
);

const url = "https://www.cpokemon.com/pokes/home/888-1.png";

export const Rounded = Template.bind({});
Rounded.args = {
  src: url,
  alt: "Rounded",
};

export const RoundedWithBackground = Template.bind({});
RoundedWithBackground.args = {
  backgroundColor: "secondary.main",
  src: url,
  alt: "RoundedWithBackground",
};

export const BigRounded = Template.bind({});
BigRounded.args = {
  size: 176,
  src: url,
  alt: "BigRounded",
};

export const BigRoundedWithBackground = Template.bind({});
BigRoundedWithBackground.args = {
  size: 176,
  backgroundColor: "#8FD3FF",
  src: url,
  alt: "BigRoundedWithBackground",
};

export const BigRoundedWithBackgroundAndBorder = Template.bind({});
BigRoundedWithBackgroundAndBorder.args = {
  size: 176,
  backgroundColor: "#8FD3FF",
  src: url,
  alt: "BigRoundedWithBackgroundAndBorder",
  border: 1,
};
