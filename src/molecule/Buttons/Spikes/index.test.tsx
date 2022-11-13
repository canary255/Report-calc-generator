import { describe, expect, test } from "@jest/globals";

import { SpikesButton } from ".";

describe("Testing Selector component", () => {
  test("Selector component should be defined", () => {
    expect(SpikesButton).toBeDefined();
  });

  test("Selector component should render correctly", () => {
    expect(SpikesButton).toMatchSnapshot();
  });
});
