import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Result } from ".";

export default {
  title: "Organism/GenerateInfo/Result",
  component: Result,
  argTypes: {},
} as ComponentMeta<typeof Result>;

const list = [
  {
    name: "bulbasaur",
    src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    color: "green" as const,
  },
];

for (let i = 1; i < 1050; i++) {
  list.push({
    name: "bulbasaur",
    src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    color: "green" as const,
  });
}

const Template: ComponentStory<typeof Result> = (args) => (
  <Result list={list} />
);

export const Default = Template.bind({});
Default.args = {};
