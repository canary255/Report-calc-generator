import { MenuItem, Select } from "@mui/material";
import { SelectorProps } from "../../models/atom/selector.model";

export const Selector = ({
  label = "",
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
