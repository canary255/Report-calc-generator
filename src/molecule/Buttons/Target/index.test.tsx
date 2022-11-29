import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { TargetButton } from ".";

describe("Testing Target Button component", () => {
  const value = "single";
  const onClick = () => {};
  const wrapper = render(<TargetButton value={value} onClick={onClick} />);

  test("Target Button component should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  test("Target Button component should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
