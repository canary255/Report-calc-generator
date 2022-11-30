import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FieldComponent } from ".";

export default {
  title: "Organism/DefensivePokemon/Field",
  component: FieldComponent,
  argTypes: {},
} as ComponentMeta<typeof FieldComponent>;

const Template: ComponentStory<typeof FieldComponent> = (args) => (
  <FieldComponent />
);

export const Default = Template.bind({});
Default.args = {};
