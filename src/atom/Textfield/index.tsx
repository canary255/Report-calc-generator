import { TextField } from "@mui/material";
import { TextFieldProps } from "../../models/atom/textfield.model";

export const TextFieldComponent = ({
  placeholder,
  name,
  value,
  readOnly,
  fullWidth,
  onChange,
}: TextFieldProps) => {
  return (
    <TextField
      InputProps={{ readOnly: Boolean(readOnly) }}
      id={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      fullWidth={fullWidth}
    />
  );
};
