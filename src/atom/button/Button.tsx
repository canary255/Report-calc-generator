import { Button } from "@mui/material";

interface ButtonProps {
  variant?: "text" | "outlined" | "contained";
  /**
   * What background color to use
   */
  backgroundColor?:
    | "error"
    | "warning"
    | "info"
    | "success"
    | "primary"
    | "secondary"
    | "inherit";
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const ButtonOption = ({
  variant = "contained",
  size = "medium",
  backgroundColor = "primary",
  label,
  ...props
}: ButtonProps) => {
  return (
    <Button color={backgroundColor} variant={variant} size={size} {...props}>
      {label}
    </Button>
  );
};
