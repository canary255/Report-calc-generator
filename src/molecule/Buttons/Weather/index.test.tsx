import { describe, expect, test } from "@jest/globals";

import { WeatherButton } from ".";

describe("Testing Selector component", () => {
  test("Selector component should be defined", () => {
    expect(WeatherButton).toBeDefined();
  });

  test("Selector component should render correctly", () => {
    expect(WeatherButton).toMatchSnapshot();
  });
});
