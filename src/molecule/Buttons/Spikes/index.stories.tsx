import React, { useCallback, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SpikesButton } from ".";

export default {
  title: "Molecule/Buttons/Spikes",
  component: SpikesButton,
  argTypes: {},
} as ComponentMeta<typeof SpikesButton>;

const Template: ComponentStory<typeof SpikesButton> = (args) => {
  const [spikes, setSpikes] = useState("0");
  return (
    <SpikesButton value={spikes} onClick={(e) => setSpikes(e.target.value)} />
  );
};

export const Default = Template.bind({});
Default.args = {};
