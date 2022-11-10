import { TextField } from "@mui/material";

type TextFieldProps = {
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
};

export const TextFieldComponent = ({
  placeholder,
  name,
  value,
  onChange,
}: TextFieldProps) => {
  return (
    <TextField id={name} placeholder={placeholder} onChange={onChange}>
      {value}
    </TextField>
  );
};
