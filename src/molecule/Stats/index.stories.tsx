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
    baseSpa: "80",
    evSpa: "0",
    ivSpa: "31",
    nature: "Adamant",
  });
  const options = [
    { label: "-6", value: "-6" },
    { label: "-5", value: "-5" },
    { label: "-4", value: "-4" },
    { label: "-3", value: "-3" },
    { label: "-2", value: "-2" },
    { label: "-1", value: "-1" },
    { label: "0", value: "0" },
    { label: "+1", value: "1" },
    { label: "+2", value: "2" },
    { label: "+3", value: "3" },
    { label: "+4", value: "4" },
    { label: "+5", value: "5" },
    { label: "+6", value: "6" },
  ];
  return (
    <Stats
      stat={pokemonStat}
      setPokemonStat={setPokemonStat}
      options={options}
    />
  );
};
export const Default = Template.bind({});
Default.args = {};
