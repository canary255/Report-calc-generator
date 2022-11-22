import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { PokemonInfo } from ".";

describe("Testing PokemonList component", () => {
  const wrapper = render(<PokemonInfo list={[]} />);

  test("PokemonList component should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  test("PokemonList component should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
