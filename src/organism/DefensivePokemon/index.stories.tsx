import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DefensivePokemon } from ".";

export default {
  title: "Organism/DefensivePokemon",
  component: DefensivePokemon,
  argTypes: {},
} as ComponentMeta<typeof DefensivePokemon>;

const Template: ComponentStory<typeof DefensivePokemon> = (args) => (
  <DefensivePokemon />
);

export const Default = Template.bind({});
Default.args = {};
