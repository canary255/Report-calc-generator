import { InputLabel } from "@mui/material";
import { LabelProps } from "../../models/atom/label.model";

export const Label = ({ children, name }: LabelProps) => {
  return <InputLabel id={name}>{children}</InputLabel>;
};
