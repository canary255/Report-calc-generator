import { TextField, Typography } from "@mui/material";

type SelectorProps = {
  text: string;
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
  text,
  variant = "h1",
}: SelectorProps) => {
  return (
    <Typography variant={variant} gutterBottom>
      {text}
    </Typography>
  );
};
