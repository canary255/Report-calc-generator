import { TextField } from "@mui/material";

type TextFieldProps = {
  name: string;
  placeholder?: string;
  value?: string;
  readOnly?: boolean;
  fullWidth?: boolean;
  onChange?: (e: any) => void;
};

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
