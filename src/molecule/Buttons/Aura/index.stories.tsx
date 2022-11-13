import React, { useCallback, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AuraButton } from ".";

export default {
  title: "Molecule/Buttons/Aura",
  component: AuraButton,
  argTypes: {},
} as ComponentMeta<typeof AuraButton>;

const Template: ComponentStory<typeof AuraButton> = (args) => {
  const [aura, setAura] = useState("");
  return <AuraButton value={aura} onClick={(e) => setAura(e.target.value)} />;
};

export const Default = Template.bind({});
Default.args = {};
