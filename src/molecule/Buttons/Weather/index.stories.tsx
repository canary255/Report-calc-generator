import React, { useCallback, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { WeatherButton } from ".";

export default {
  title: "Molecule/Buttons/Weather",
  component: WeatherButton,
  argTypes: {},
} as ComponentMeta<typeof WeatherButton>;

const Template: ComponentStory<typeof WeatherButton> = (args) => {
  const [weather, setWeather] = useState("");
  return (
    <WeatherButton
      value={weather}
      onClick={useCallback(
        (e) => {
          setWeather(e.target.value);
        },
        [weather]
      )}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
