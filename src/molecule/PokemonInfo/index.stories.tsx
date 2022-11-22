import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PokemonInfo } from ".";

export default {
  title: "Molecule/PokemonInfo",
  component: PokemonInfo,
  argTypes: {},
} as ComponentMeta<typeof PokemonInfo>;

const pokemon = {
  src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  color: "red" as const,
  name: "Bulbasaur",
  standard: {
    set: "0/0/0/252/0/252",
    message:
      "+1 164+ Atk Zacian-Crowned Behemoth Blade vs. 0 HP / 0 Def Bulbasaur: 283-334 (235.8 - 278.3%) -- guaranteed OHKO",
    color: "red" as const,
  },
  extreme: {
    set: "252/0/252/0/0/0",
    message:
      "+1 164+ Atk Zacian-Crowned Behemoth Blade vs. 252 HP / 252+ Def Bulbasaur: 177-208 (116.4 - 136.8%) -- guaranteed OHKO",
    color: "yellow" as const,
  },
  optimal: {
    set: "252/0/252/0/0/0",
    message:
      "+1 164+ Atk Zacian-Crowned Behemoth Blade vs. 252 HP / 252+ Def Bulbasaur: 177-208 (116.4 - 136.8%) -- guaranteed OHKO",
    color: "green" as const,
  },
};

const Template: ComponentStory<typeof PokemonInfo> = (args) => (
  <PokemonInfo {...args} />
);

export const Default = Template.bind({});
Default.args = {
  pokemon: pokemon,
};
