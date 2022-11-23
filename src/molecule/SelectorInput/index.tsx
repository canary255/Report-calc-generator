import { FormControl } from "@mui/material";
import { Label } from "../../atom/Label";
import { Selector } from "../../atom/Selector";
import { SelectorinputProps } from "../../models/molecule/selectorInput.model";

export const SelectorInput = ({
  label = "",
  name,
  placeholder = "",
  options = [],
  value,
  onChange,
}: SelectorinputProps) => {
  return (
    <>
      <Label name={name}>{label}</Label>
      <FormControl fullWidth>
        <Label name={name}>{placeholder}</Label>
        <Selector
          label={placeholder}
          name={name}
          options={options}
          value={value}
          onChange={onChange}
        />
      </FormControl>
    </>
  );
};
