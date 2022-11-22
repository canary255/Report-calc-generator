import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { WeatherButton } from ".";

describe("Testing Weather Button component", () => {
  const value = "test";
  const onClick = () => {};
  const wrapper = render(<WeatherButton value={value} onClick={onClick} />);

  test("Weather Button component should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  test("Weather Button component should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
