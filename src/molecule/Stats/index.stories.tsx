import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Stats } from ".";

export default {
  title: "Molecule/Stats",
  component: Stats,
  argTypes: {},
} as ComponentMeta<typeof Stats>;

const Template: ComponentStory<typeof Stats> = (args) => {
  const [pokemonStat, setPokemonStat] = useState({
    baseAtk: "170",
    evAtk: "252",
    ivAtk: "31",
    boostAtk: "-5",
    baseSpa: "80",
    evSpa: "0",
    ivSpa: "31",
    boostSpa: "0",
    nature: "Adamant",
  });

  return <Stats stat={pokemonStat} setPokemonStat={setPokemonStat} />;
};
export const Default = Template.bind({});
Default.args = {};
