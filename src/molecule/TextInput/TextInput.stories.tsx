import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextInput } from "./Textinput";

export default {
  title: "Molecule/TextInput",
  component: TextInput,
  argTypes: {},
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Insert your text here",
  name: "pokemon",
};

export const Empty = Template.bind({});
Empty.args = {
  name: "empty",
};
