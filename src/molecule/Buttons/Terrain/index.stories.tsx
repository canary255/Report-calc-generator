import React, { useCallback, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TerrainButton } from ".";

export default {
  title: "Molecule/Buttons/Terrain",
  component: TerrainButton,
  argTypes: {},
} as ComponentMeta<typeof TerrainButton>;

const Template: ComponentStory<typeof TerrainButton> = (args) => {
  const [terrain, setTerrain] = useState("");
  return (
    <TerrainButton
      value={terrain}
      onClick={(e) => setTerrain(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
