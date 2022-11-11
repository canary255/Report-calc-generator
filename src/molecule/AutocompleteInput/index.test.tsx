import { describe, expect, test } from "@jest/globals";

import { AutocompleteField } from ".";

describe("Testing Selector component", () => {
  test("Selector component should be defined", () => {
    expect(AutocompleteField).toBeDefined();
  });

  test("Selector component should render correctly", () => {
    expect(AutocompleteField).toMatchSnapshot();
  });
});
