import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";

import { DividerComponent } from ".";

describe("Testing Divider component", () => {
  const name = "test";
  const wrapper = render(<DividerComponent />);

  test("Divider component should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  test("Divider component should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
