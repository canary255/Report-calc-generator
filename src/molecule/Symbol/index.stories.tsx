import React, { useCallback, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Symbol } from ".";

export default {
  title: "Molecule/Symbol",
  component: Symbol,
  argTypes: {},
} as ComponentMeta<typeof Symbol>;

const Template: ComponentStory<typeof Symbol> = (args) => <Symbol />;

export const Default = Template.bind({});
Default.args = {};
