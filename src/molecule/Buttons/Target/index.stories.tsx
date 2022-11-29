import React, { useCallback, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TargetButton } from ".";

export default {
  title: "Molecule/Buttons/Target",
  component: TargetButton,
  argTypes: {},
} as ComponentMeta<typeof TargetButton>;

const Template: ComponentStory<typeof TargetButton> = (args) => {
  const [target, setTarget] = useState("single");
  return (
    <TargetButton value={target} onClick={(e) => setTarget(e.target.value)} />
  );
};

export const Default = Template.bind({});
Default.args = {};
