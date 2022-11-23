import { Avatar } from "@mui/material";
import { RoundedImageProps } from "../../models/atom/roundedImage.model";

export const RoundedImage = ({
  src,
  alt,
  size,
  backgroundColor,
  border,
}: RoundedImageProps) => {
  const sx = { width: size, height: size, backgroundColor, border: border };
  return <Avatar sx={sx} alt={alt} src={src} />;
};
