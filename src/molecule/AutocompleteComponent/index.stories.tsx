import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AutocompleteComponent } from ".";

export default {
  title: "Molecule/AutocompleteInput",
  component: AutocompleteComponent,
  argTypes: {},
} as ComponentMeta<typeof AutocompleteComponent>;

const list = [
  { label: "Zacian", value: "888" },
  { label: "Zamazenta", value: "889" },
  { label: "Zarude", value: "890" },
  { label: "Zekrom", value: "643" },
];

const Template: ComponentStory<typeof AutocompleteComponent> = (args) => (
  <AutocompleteComponent {...args} />
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
