import { describe, expect, test } from "@jest/globals";

import { AuraButton } from ".";

describe("Testing Selector component", () => {
  test("Selector component should be defined", () => {
    expect(AuraButton).toBeDefined();
  });

  test("Selector component should render correctly", () => {
    expect(AuraButton).toMatchSnapshot();
  });
});
