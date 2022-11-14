import { Box, Paper } from "@mui/material";

type SpriteProps = {
  src?: string;
  alt?: string;
  size?: number;
  backgroundColor?: "red" | "green" | "yellow";
};

function getColor(backgroundColor: SpriteProps["backgroundColor"]) {
  if (backgroundColor === "green") return "#8ed794";
  if (backgroundColor === "yellow") return "#f1f17b";
  return "#f14f53";
}

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
