import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { OffensivePokemon } from ".";

export default {
  title: "Organism/OffensivePokemon",
  component: OffensivePokemon,
  argTypes: {},
} as ComponentMeta<typeof OffensivePokemon>;

const offensive = {
  stat: {
    baseAtk: "185",
    evAtk: "252",
    ivAtk: "31",
    boostAtk: "6",
    baseSpa: "80",
    evSpa: "0",
    ivSpa: "31",
    boostSpa: "0",
    nature: "Adamant",
  },
};

const Template: ComponentStory<typeof OffensivePokemon> = (args) => (
  <OffensivePokemon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  offensive: offensive,
};
