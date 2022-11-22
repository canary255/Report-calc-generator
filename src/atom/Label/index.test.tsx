import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";

import { Label } from ".";

describe("Testing Label component", () => {
  const name = "test";
  const label = "Label Test";
  const wrapper = render(<Label name={name}>{label}</Label>);

  test("Label component should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  test("Label component should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
