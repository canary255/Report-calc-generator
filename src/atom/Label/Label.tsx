import { InputLabel } from "@mui/material";

type LabelProps = {
  children: string;
  name: string;
};

export const Label = ({ children, name }: LabelProps) => {
  return <InputLabel id={name}>{children}</InputLabel>;
};
