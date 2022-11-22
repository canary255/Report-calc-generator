import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";

import { Stats } from ".";

describe("Testing <Stats /> component", () => {
  const stat = {
    baseAtk: "170",
    evAtk: "252",
    ivAtk: "31",
    boostAtk: "-5",
    baseSpa: "80",
    evSpa: "0",
    ivSpa: "31",
    boostSpa: "0",
    nature: "Adamant",
  };
  const wrapper = render(<Stats stat={stat} />);

  test("Stats component should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  test("Stats component should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
