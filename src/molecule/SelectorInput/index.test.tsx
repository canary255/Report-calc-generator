import { describe, expect, test } from "@jest/globals";

import { SelectorInput } from ".";

describe("Testing Selector component", () => {
  test("Selector component should be defined", () => {
    expect(SelectorInput).toBeDefined();
  });

  test("Selector component should render correctly", () => {
    expect(SelectorInput).toMatchSnapshot();
  });
});
