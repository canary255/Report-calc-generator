import { MenuItem, Select } from "@mui/material";
import { SelectorProps } from "../../models/atom/selector.model";

export const Selector = ({
  label = "",
  name,
  value,
  options = [],
  fullWidth = false,
  onChange,
}: SelectorProps) => {
  return (
    <Select
      value={value}
      id={name}
      labelId={name}
      label={label}
      onChange={onChange}
      fullWidth={fullWidth}
    >
      {options.map((option, i) => (
        <MenuItem key={i} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
};
