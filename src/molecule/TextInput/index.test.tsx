import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { TextInput } from ".";

describe("Testing TextInput component", () => {
  const name = "test";
  const value = "test";
  const wrapper = render(<TextInput value={value} name={name} />);

  test("TextInput component should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  test("TextInput component should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
