import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { AuraButton } from ".";

describe("Testing Aura Button component", () => {
  const value = "test";
  const onClick = () => {};
  const wrapper = render(<AuraButton value={value} onClick={onClick} />);

  test("Aura Button component should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  test("Aura Button component should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
