import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DefensivePokemonSection } from ".";

export default {
  title: "Organism/DefensivePokemon/Pokemon",
  component: DefensivePokemonSection,
  argTypes: {},
} as ComponentMeta<typeof DefensivePokemonSection>;

const Template: ComponentStory<typeof DefensivePokemonSection> = (args) => (
  <DefensivePokemonSection />
);

export const Default = Template.bind({});
Default.args = {};
