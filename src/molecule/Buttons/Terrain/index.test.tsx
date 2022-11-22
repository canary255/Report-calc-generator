import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { TerrainButton } from ".";

describe("Testing Terrain Button component", () => {
  const value = "test";
  const onClick = () => {};
  const wrapper = render(<TerrainButton value={value} onClick={onClick} />);

  test("Terrain Button component should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  test("Terrain Button component should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
