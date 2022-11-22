import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";

import { AutocompleteInput } from ".";

describe("Testing AutocompleteInput component", () => {
  const name = "test";
  const options = [
    { value: "1", label: "test1" },
    { value: "2", label: "test2" },
  ];
  const wrapper = render(<AutocompleteInput name={name} options={options} />);

  test("AutocompleteInput component should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  test("AutocompleteInput component should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
