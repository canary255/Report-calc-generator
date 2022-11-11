import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Label } from ".";

export default {
  title: "Atom/Label",
  component: Label,
  argTypes: {},
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Insert your text here",
  name: "pokemon",
};