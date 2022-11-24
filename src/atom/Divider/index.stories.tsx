import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DividerComponent } from ".";

export default {
  title: "Atom/Divider",
  component: DividerComponent,
  argTypes: {},
} as ComponentMeta<typeof DividerComponent>;

const Template: ComponentStory<typeof DividerComponent> = (args) => (
  <DividerComponent />
);

export const Default = Template.bind({});
