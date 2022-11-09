import { TextField } from "@mui/material";

type SelectorProps = {
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
}: SelectorProps) => {
  return (
    <TextField id={name} placeholder={placeholder} onChange={onChange}>
      {value}
    </TextField>
  );
};
