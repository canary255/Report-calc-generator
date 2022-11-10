import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Selector } from "./Selector";

export default {
  title: "Atom/Selector",
  component: Selector,
  argTypes: {},
} as ComponentMeta<typeof Selector>;

const list = [
  { label: "Zacian", value: "888" },
  { label: "Zamazenta", value: "889" },
  { label: "Zarude", value: "890" },
  { label: "Zekrom", value: "643" },
];

const Template: ComponentStory<typeof Selector> = (args) => {
  const [selected, setSelected] = useState("");
  return (
    <Selector
      {...args}
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Pokemon",
  name: "pokemon",
  options: list,
};

export const Empty = Template.bind({});
Empty.args = {
  label: "Empty List",
  name: "empty",
  options: [],
};
