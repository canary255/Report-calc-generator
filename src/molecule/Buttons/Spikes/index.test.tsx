import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { SpikesButton } from ".";

describe("Testing Spikes Button component", () => {
  const value = "test";
  const onClick = () => {};
  const wrapper = render(<SpikesButton value={value} onClick={onClick} />);

  test("Spikes Button component should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  test("Spikes Button component should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
