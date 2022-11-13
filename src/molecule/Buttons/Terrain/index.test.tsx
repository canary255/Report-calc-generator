import { describe, expect, test } from "@jest/globals";

import { TerrainButton } from ".";

describe("Testing Selector component", () => {
  test("Selector component should be defined", () => {
    expect(TerrainButton).toBeDefined();
  });

  test("Selector component should render correctly", () => {
    expect(TerrainButton).toMatchSnapshot();
  });
});
