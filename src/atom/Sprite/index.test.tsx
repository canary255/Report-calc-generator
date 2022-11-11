import { describe, expect, test } from "@jest/globals";
import { Sprite } from ".";

describe("Testing RoundedImage component", () => {
  test("RoundedImage component should be defined", () => {
    expect(Sprite).toBeDefined();
  });

  test("RoundedImage component should render correctly", () => {
    expect(Sprite).toMatchSnapshot();
  });
});
