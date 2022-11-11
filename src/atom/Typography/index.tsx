import { Typography } from "@mui/material";

type TypographyProps = {
  children: string;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "button"
    | "caption"
    | "overline"
    | "inherit";
};

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
