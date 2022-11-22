import { describe, expect, test } from "@jest/globals";

import { Symbol } from ".";

describe("Testing Selector component", () => {
  test("Selector component should be defined", () => {
    expect(Symbol).toBeDefined();
  });

  test("Selector component should render correctly", () => {
    expect(Symbol).toMatchSnapshot();
  });
});
