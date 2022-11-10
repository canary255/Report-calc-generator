import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TypographyComponent } from "./TypographyComponent";

export default {
  title: "Atom/Typgraphy",
  component: TypographyComponent,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof TypographyComponent>;

const Template: ComponentStory<typeof TypographyComponent> = (args) => (
  <TypographyComponent {...args} />
);

export const H1 = Template.bind({});
H1.args = {
  text: "Lorem ipsum dolor sit amet",
};

export const H2 = Template.bind({});
H2.args = {
  text: "Lorem ipsum dolor sit amet",
  variant: "h2",
};

export const H3 = Template.bind({});
H3.args = {
  text: "Lorem ipsum dolor sit amet",
  variant: "h3",
};

export const Subtitle1 = Template.bind({});
Subtitle1.args = {
  text: "Lorem ipsum dolor sit amet",
  variant: "subtitle1",
};
export const Subtitle2 = Template.bind({});
Subtitle2.args = {
  text: "Lorem ipsum dolor sit amet",
  variant: "subtitle2",
};
export const Button = Template.bind({});
Button.args = {
  text: "Lorem ipsum dolor sit amet",
  variant: "button",
};
export const Body1 = Template.bind({});
Body1.args = {
  text: "Lorem ipsum dolor sit amet",
  variant: "body1",
};

export const Body2 = Template.bind({});
Body2.args = {
  text: "Lorem ipsum dolor sit amet",
  variant: "body2",
};

export const Caption = Template.bind({});
Caption.args = {
  text: "Lorem ipsum dolor sit amet",
  variant: "caption",
};

export const Overline = Template.bind({});
Overline.args = {
  text: "Lorem ipsum dolor sit amet",
  variant: "overline",
};

export const Inherit = Template.bind({});
Inherit.args = {
  text: "Lorem ipsum dolor sit amet",
  variant: "inherit",
};
