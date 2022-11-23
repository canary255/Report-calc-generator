import { FormControl } from "@mui/material";
import { AutocompleteInput } from "../../atom/Autocomplete";
import { Label } from "../../atom/Label";
import { AutoCompleteInputProps } from "../../models/molecule/autocompleteInput.model";

export const AutocompleteField = ({
  label = "",
  name,
  placeholder = "",
  options = [],
  onChange,
}: AutoCompleteInputProps) => {
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
