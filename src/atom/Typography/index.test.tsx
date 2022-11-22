import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";

import { TypographyComponent } from ".";

describe("Testing TypographyComponent component", () => {
  const label = "test";
  const wrapper = render(<TypographyComponent children={label} />);

  test("TypographyComponent component should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  test("TypographyComponent component should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
