import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";

import { TextFieldComponent } from ".";

describe("Testing TextFieldComponent component", () => {
  const name = "test";
  const value = "test";
  const wrapper = render(<TextFieldComponent value={value} name={name} />);

  test("TextFieldComponent component should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  test("TextFieldComponent component should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
