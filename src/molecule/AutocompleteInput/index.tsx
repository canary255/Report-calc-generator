import { FormControl } from "@mui/material";
import { AutocompleteInput } from "../../atom/Autocomplete";
import { Label } from "../../atom/Label";

type TextinputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  options?: { label: string; value: string }[];
  value?: string;
  onChange?: (e: any) => void;
};

export const AutocompleteField = ({
  label = "",
  name,
  placeholder = "",
  options = [],
  onChange,
}: TextinputProps) => {
  return (
    <>
      <Label name={name}>{label}</Label>
      <FormControl fullWidth>
        <AutocompleteInput
          name={name}
          options={options}
          label={placeholder}
          onChange={onChange}
        />
      </FormControl>
    </>
  );
};
