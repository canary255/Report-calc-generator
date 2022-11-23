import { Box, Paper } from "@mui/material";
import { getColor } from "../../domains/getColor";
import { SpriteProps } from "../../models/atom/sprite.model";

export const Sprite = ({
  src = "",
  alt,
  size = 64,
  backgroundColor,
}: SpriteProps) => {
  const width = size;
  const height = size;

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width,
          height,
        },
      }}
    >
      <Paper
        sx={{ width, height, backgroundColor: getColor(backgroundColor) }}
        variant="outlined"
      >
        {src !== "" && (
          <img width={width} height={height} src={src} alt={alt} />
        )}
      </Paper>
    </Box>
  );
};
