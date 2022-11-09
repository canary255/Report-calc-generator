import { describe, expect, test } from "@jest/globals";

import { Selector } from "./Selector";

describe("Testing Selector component", () => {
  test("Selector component should be defined", () => {
    expect(Selector).toBeDefined();
  });

  test("Selector component should render correctly", () => {
    expect(Selector).toMatchSnapshot();
  });
});
