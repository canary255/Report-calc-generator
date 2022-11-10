import { InputLabel } from "@mui/material";

type SelectorProps = {
  children: string;
  name: string;
};

export const Label = ({ children, name }: SelectorProps) => {
  return <InputLabel id={name}>{children}</InputLabel>;
};
