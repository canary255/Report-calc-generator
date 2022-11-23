import { Typography } from "@mui/material";
import { TypographyProps } from "../../models/atom/typography.model";

export const TypographyComponent = ({
  children,
  variant = "h1",
}: TypographyProps) => {
  return (
    <Typography variant={variant} gutterBottom>
      {children}
    </Typography>
  );
};
