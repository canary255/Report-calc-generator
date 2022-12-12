import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AppInfoAndButton } from ".";

export default {
  title: "Organism/GenerateInfo/AppInfoAndButton",
  component: AppInfoAndButton,
  argTypes: {},
} as ComponentMeta<typeof AppInfoAndButton>;

const Template: ComponentStory<typeof AppInfoAndButton> = (args) => (
  <AppInfoAndButton />
);

export const Default = Template.bind({});
Default.args = {};
