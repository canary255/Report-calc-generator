import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Loading } from ".";

export default {
  title: "Organism/GenerateInfo/Loading",
  component: Loading,
  argTypes: {},
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => <Loading />;

export const Default = Template.bind({});
Default.args = {};
