import { describe, expect, test } from "@jest/globals";
import { ButtonOption } from ".";

describe("Testing Button component", () => {
  test("Button component should be defined", () => {
    expect(ButtonOption).toBeDefined();
  });

  test("Button component should render correctly", () => {
    expect(ButtonOption).toMatchSnapshot();
  });
});
