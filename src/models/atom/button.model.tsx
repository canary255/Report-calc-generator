export interface ButtonProps {
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
  fontSize?: number;
}
