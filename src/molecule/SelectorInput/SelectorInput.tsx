import { FormControl } from "@mui/material";
import { Label } from "../../atom/Label/Label";
import { Selector } from "../../atom/Selector/Selector";

type TextinputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  options?: { label: string; value: string }[];
  value?: string;
  onChange?: (e: any) => void;
};

export const SelectorInput = ({
  label = "",
  name,
  placeholder = "",
  options = [],
  value,
  onChange,
}: TextinputProps) => {
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
