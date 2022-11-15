import { describe, expect, test } from "@jest/globals";

import { Stats } from ".";

describe("Testing Selector component", () => {
  test("Selector component should be defined", () => {
    expect(Stats).toBeDefined();
  });

  test("Selector component should render correctly", () => {
    expect(Stats).toMatchSnapshot();
  });
});
