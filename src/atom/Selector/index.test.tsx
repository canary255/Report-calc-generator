import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";

import { Selector } from ".";

describe("Testing Selector component", () => {
  const name = "test";
  const options = [
    { value: "0", label: "0" },
    { value: "1", label: "1" },
  ];
  const wrapper = render(<Selector value="" name={name} options={options} />);

  test("Selector component should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  test("Selector component should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
