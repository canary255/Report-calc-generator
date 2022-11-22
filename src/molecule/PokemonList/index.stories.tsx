import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PokemonList } from ".";

export default {
  title: "Molecule/PokemonList",
  component: PokemonList,
  argTypes: {},
} as ComponentMeta<typeof PokemonList>;

const list = [
  {
    src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    color: "red" as const,
  },
  {
    src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    color: "yellow" as const,
  },
  {
    src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    color: "red" as const,
  },
  {
    src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    color: "green" as const,
  },
  {
    src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    color: "yellow" as const,
  },
  {
    src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    color: "green" as const,
  },
];

const Template: ComponentStory<typeof PokemonList> = (args) => (
  <PokemonList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  list: list,
};
