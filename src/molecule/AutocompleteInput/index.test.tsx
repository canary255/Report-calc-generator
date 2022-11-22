import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";

import { AutocompleteField } from ".";

describe("Testing AutoCompleteInput component", () => {
  const name = "test";
  const value = "test";
  const options = [
    { value: "0", label: "0" },
    { value: "1", label: "1" },
  ];
  const wrapper = render(
    <AutocompleteField
      value={value}
      name={name}
      options={options}
      onChange={() => {}}
    />
  );

  test("AutoCompleteInput component should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  test("AutoCompleteInput component should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
