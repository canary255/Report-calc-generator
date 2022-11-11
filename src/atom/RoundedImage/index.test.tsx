import { describe, expect, test } from "@jest/globals";
import { RoundedImage } from ".";

describe("Testing RoundedImage component", () => {
  test("RoundedImage component should be defined", () => {
    expect(RoundedImage).toBeDefined();
  });

  test("RoundedImage component should render correctly", () => {
    expect(RoundedImage).toMatchSnapshot();
  });
});
