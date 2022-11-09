import { MenuItem, Select } from "@mui/material";

type SelectorProps = {
  label: string;
  name: string;
  value?: string;
  options?: { label: string; value: string }[];
  onChange?: (e: any) => void;
};

export const Selector = ({
  label,
  name,
  value,
  options = [],
  onChange,
}: SelectorProps) => {
  return (
    <Select
      value={value}
      id={name}
      labelId={name}
      label={label}
      onChange={onChange}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {options.map((option, i) => (
        <MenuItem key={i} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
};
