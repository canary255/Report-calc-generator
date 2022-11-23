import { Autocomplete, TextField } from "@mui/material";
import { AutocompleteProps } from "../../models/atom/autoComplete.model";

export const AutocompleteInput = ({
  label = "",
  name,
  options = [],
  onChange,
}: AutocompleteProps) => {
  return (
    <Autocomplete
      disablePortal
      id={name}
      options={options}
      onChange={onChange}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};
