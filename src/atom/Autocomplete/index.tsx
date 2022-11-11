import { Autocomplete, TextField } from "@mui/material";

type AutocompleteProps = {
  name: string;
  options: { label: string }[];
  label?: string;
  onChange?: (e: any) => void;
};

export const AutocompleteInput = ({
  label,
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
