import { describe, expect, test } from "@jest/globals";

import { AutocompleteInput } from ".";

describe("Testing Selector component", () => {
  test("Selector component should be defined", () => {
    expect(AutocompleteInput).toBeDefined();
  });

  test("Selector component should render correctly", () => {
    expect(AutocompleteInput).toMatchSnapshot();
  });
});
