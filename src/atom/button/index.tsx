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
  children: string;
  /**
   * Optional click handler
   */
  onClick?: (e: any) => void;
  /**
   * Custom Width
   */
  width?: number;
  /**
   * Custom Height
   */
  height?: number;
  /**
   * Border Radius
   */
  borderRadius?: "left" | "right" | "top" | "bottom" | "none" | "all";
  value?: string;
}

function getBorderRadius(borderRadius: string) {
  if (borderRadius === "left") {
    return "12px 0 0 12px";
  }
  if (borderRadius === "right") {
    return "0 12px 12px 0";
  }
  if (borderRadius === "top") {
    return "12px 12px 0 0";
  }
  if (borderRadius === "bottom") {
    return "0 0 12px 12px";
  }
  if (borderRadius === "none") {
    return "0";
  }
  if (borderRadius === "all") {
    return "12px";
  }
}

export const ButtonOption = ({
  variant = "contained",
  size = "medium",
  backgroundColor = "primary",
  children,
  height,
  width,
  borderRadius,
  ...props
}: ButtonProps) => {
  const custom = {
    height: height,
    width: width,
    borderRadius: borderRadius ? getBorderRadius(borderRadius) : "",
  };
  return (
    <Button
      color={backgroundColor}
      sx={{ ...custom }}
      variant={variant}
      size={size}
      {...props}
    >
      {children}
    </Button>
  );
};
