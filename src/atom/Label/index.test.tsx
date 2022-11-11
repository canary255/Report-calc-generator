import { describe, expect, test } from "@jest/globals";

import { Label } from ".";

describe("Testing Selector component", () => {
  test("Selector component should be defined", () => {
    expect(Label).toBeDefined();
  });

  test("Selector component should render correctly", () => {
    expect(Label).toMatchSnapshot();
  });
});
