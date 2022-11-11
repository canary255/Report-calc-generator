import { Avatar, Box, Button } from "@mui/material";

type RoundedImageProps = {
  src: string;
  alt?: string;
  size?: number;
  backgroundColor?: string;
  border?: number;
};

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
