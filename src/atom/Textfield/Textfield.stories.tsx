import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextFieldComponent } from "./Textfield";

export default {
  title: "Atom/Textfield",
  component: TextFieldComponent,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof TextFieldComponent>;

const Template: ComponentStory<typeof TextFieldComponent> = (args) => (
  <TextFieldComponent {...args} />
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
