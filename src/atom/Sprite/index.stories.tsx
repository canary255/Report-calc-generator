import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Sprite } from ".";

export default {
  title: "Atom/Sprite",
  component: Sprite,
  argTypes: {},
} as ComponentMeta<typeof Sprite>;

const Template: ComponentStory<typeof Sprite> = (args) => <Sprite {...args} />;

const url = "https://www.cpokemon.com/pokes/home/888-1.png";

export const Red = Template.bind({});
Red.args = {
  src: url,
  alt: "Pokemon",
  backgroundColor: "red",
};
export const Yellow = Template.bind({});
Yellow.args = {
  src: url,
  alt: "Pokemon",
  backgroundColor: "yellow",
};
export const Green = Template.bind({});
Green.args = {
  src: url,
  alt: "Pokemon",
  backgroundColor: "green",
};
