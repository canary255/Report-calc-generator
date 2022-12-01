import { Box, Grid } from "@mui/material";
import { ButtonOption } from "../../../../atom/Button";
import { AuraButton } from "../../../../molecule/Buttons/Aura";
import { TerrainButton } from "../../../../molecule/Buttons/Terrain";
import { WeatherButton } from "../../../../molecule/Buttons/Weather";

export const FieldComponent = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      sx={{ mt: 4, mb: 4 }}
    >
      <Box>
        <TerrainButton onClick={() => {}} />
      </Box>
      <Box sx={{ mt: 4 }}>
        <WeatherButton onClick={() => {}} />
      </Box>
      <Box sx={{ mt: 4 }}>
        <AuraButton onClick={() => {}} />
      </Box>
      <Box sx={{ mt: 4 }}>
        <ButtonOption>Gravity</ButtonOption>
      </Box>
    </Grid>
  );
};
