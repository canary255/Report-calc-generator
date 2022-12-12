import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PokemonReport } from ".";

export default {
  title: "Organism/GenerateInfo/PokemonReport",
  component: PokemonReport,
  argTypes: {},
} as ComponentMeta<typeof PokemonReport>;

const Template: ComponentStory<typeof PokemonReport> = (args) => (
  <PokemonReport />
);

export const Default = Template.bind({});
Default.args = {};
