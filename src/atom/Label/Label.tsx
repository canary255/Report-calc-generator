import { InputLabel } from "@mui/material";

type SelectorProps = {
  label: string;
  name: string;
};

export const Label = ({ label, name }: SelectorProps) => {
  return <InputLabel id={name}>{label}</InputLabel>;
};
