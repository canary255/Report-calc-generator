import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";

import { DividerComponent } from ".";

describe("Testing Button component", () => {
  const name = "test";
  const wrapper = render(<DividerComponent>{name}</DividerComponent>);

  test("Button component should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  test("Button component should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
