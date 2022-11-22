import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";

import { SelectorInput } from ".";

describe("Testing SelectorInput component", () => {
  const name = "test";
  const value = "";
  const onChange = () => {};
  const options = [
    { value: "0", label: "0" },
    { value: "1", label: "1" },
  ];
  const wrapper = render(
    <SelectorInput
      name={name}
      value={value}
      onChange={onChange}
      options={options}
    />
  );

  test("SelectorInput component should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  test("SelectorInput component should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
