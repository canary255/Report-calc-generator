import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";

import { RoundedImage } from ".";

describe("Testing RoundedImage component", () => {
  const src =
    "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
  const alt = "Google Logo";
  const wrapper = render(<RoundedImage src={src} alt={alt} />);

  test("RoundedImage component should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  test("RoundedImage component should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
