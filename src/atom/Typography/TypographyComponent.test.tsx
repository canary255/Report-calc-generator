import { describe, expect, test } from "@jest/globals";

import { TypographyComponent } from "./CustomTypography";

describe("Testing Selector component", () => {
  test("Selector component should be defined", () => {
    expect(TypographyComponent).toBeDefined();
  });

  test("Selector component should render correctly", () => {
    expect(TypographyComponent).toMatchSnapshot();
  });
});
