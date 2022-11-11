import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AutocompleteInput } from "./AutocompleteInput";

export default {
  title: "Atom/Autocomplete",
  component: AutocompleteInput,
  argTypes: {},
} as ComponentMeta<typeof AutocompleteInput>;

const Template: ComponentStory<typeof AutocompleteInput> = (args) => (
  <AutocompleteInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: "pokemon",
  label: "Choose your pokemon",
  options: [
    { label: "Bulbasaur" },
    { label: "Ivysaur" },
    { label: "Venusaur" },
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  name: "empty",
};
