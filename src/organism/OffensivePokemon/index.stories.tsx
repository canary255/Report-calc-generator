import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { OffensivePokemon } from ".";

export default {
  title: "Organism/OffensivePokemon",
  component: OffensivePokemon,
  argTypes: {},
} as ComponentMeta<typeof OffensivePokemon>;

const Template: ComponentStory<typeof OffensivePokemon> = (args) => (
  <OffensivePokemon />
);

export const Default = Template.bind({});
