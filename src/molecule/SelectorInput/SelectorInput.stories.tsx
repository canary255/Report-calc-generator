import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SelectorInput } from "./SelectorInput";

export default {
  title: "Molecule/SelectorInput",
  component: SelectorInput,
  argTypes: {},
} as ComponentMeta<typeof SelectorInput>;

const list = [
  { label: "Zacian", value: "888" },
  { label: "Zamazenta", value: "889" },
  { label: "Zarude", value: "890" },
  { label: "Zekrom", value: "643" },
];

const Template: ComponentStory<typeof SelectorInput> = (args) => (
  <SelectorInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Choose your pokemon",
  placeholder: "Pokémon",
  name: "pokemon",
  options: list,
};

export const OnlyLabel = Template.bind({});
OnlyLabel.args = {
  label: "Choose your pokemon",
  name: "pokemon",
  options: list,
};

export const OnlyPlaceholder = Template.bind({});
OnlyPlaceholder.args = {
  placeholder: "Pokémon",
  name: "pokemon",
  options: list,
};

export const Empty = Template.bind({});
Empty.args = {
  name: "empty",
};
