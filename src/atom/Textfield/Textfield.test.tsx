import { describe, expect, test } from "@jest/globals";

import { TextFieldComponent } from "./Textfield";

describe("Testing Selector component", () => {
  test("Selector component should be defined", () => {
    expect(TextFieldComponent).toBeDefined();
  });

  test("Selector component should render correctly", () => {
    expect(TextFieldComponent).toMatchSnapshot();
  });
});
