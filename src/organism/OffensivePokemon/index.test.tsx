import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { OffensivePokemon } from ".";

const offensive = {
  stat: {
    baseAtk: "185",
    evAtk: "252",
    ivAtk: "31",
    boostAtk: "6",
    baseSpa: "80",
    evSpa: "0",
    ivSpa: "31",
    boostSpa: "0",
    nature: "Adamant",
  },
};

describe("Testing TextInput component", () => {
  const wrapper = render(<OffensivePokemon offensive={offensive} />);

  test("TextInput component should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  test("TextInput component should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
