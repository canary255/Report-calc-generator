import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { OffensivePokemon } from ".";

describe("Testing TextInput component", () => {
  const wrapper = render(<OffensivePokemon />);

  test("TextInput component should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  test("TextInput component should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
