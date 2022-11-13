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
    <SpikesButton
      value={spikes}
      onClick={useCallback(
        (e) => {
          setSpikes(e.target.value);
        },
        [spikes]
      )}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
