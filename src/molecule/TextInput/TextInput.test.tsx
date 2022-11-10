import { describe, expect, test } from "@jest/globals";

import { TextInput } from "./Textinput";

describe("Testing Selector component", () => {
  test("Selector component should be defined", () => {
    expect(TextInput).toBeDefined();
  });

  test("Selector component should render correctly", () => {
    expect(TextInput).toMatchSnapshot();
  });
});
