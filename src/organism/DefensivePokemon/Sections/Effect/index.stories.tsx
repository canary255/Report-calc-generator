import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { EffectComponent } from ".";

export default {
  title: "Organism/DefensivePokemon/Effect",
  component: EffectComponent,
  argTypes: {},
} as ComponentMeta<typeof EffectComponent>;

const Template: ComponentStory<typeof EffectComponent> = (args) => (
  <EffectComponent />
);

export const Default = Template.bind({});
Default.args = {};
