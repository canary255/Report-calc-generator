import { Box } from "@mui/material";
import { ButtonOption } from "../../../../atom/Button";
import { AuraButton } from "../../../../molecule/Buttons/Aura";
import { TerrainButton } from "../../../../molecule/Buttons/Terrain";
import { WeatherButton } from "../../../../molecule/Buttons/Weather";

export const FieldComponent = () => {
  return (
    <>
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
    </>
  );
};
