import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { DefensivePokemon } from ".";

describe("Testing DefensivePokemon component", () => {
  const wrapper = render(<DefensivePokemon />);

  test("DefensivePokemon component should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  test("DefensivePokemon component should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
