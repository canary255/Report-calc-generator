import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { Symbol } from ".";

describe("Testing Symbol component", () => {
  const wrapper = render(<Symbol />);

  test("Symbol component should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  test("Symbol component should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
