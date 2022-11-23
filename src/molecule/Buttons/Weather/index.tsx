import { Grid } from "@mui/material";
import { ButtonOption } from "../../../atom/Button";
import { Weather, WeatherProps } from "../../../models/molecule/weather.model";
import { isSelected } from "../isSelected";

export const WeatherButton = ({ value = "", onClick }: WeatherProps) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      spacing={2}
    >
      <Grid item>
        <ButtonOption
          onClick={onClick}
          value={Weather.NONE}
          borderRadius="left"
          backgroundColor={isSelected(value, Weather.NONE)}
        >
          None
        </ButtonOption>
        <ButtonOption
          onClick={onClick}
          value={Weather.SUN}
          borderRadius="none"
          backgroundColor={isSelected(value, Weather.SUN)}
        >
          Sun
        </ButtonOption>
        <ButtonOption
          onClick={onClick}
          borderRadius="none"
          value={Weather.RAIN}
          backgroundColor={isSelected(value, Weather.RAIN)}
        >
          Rain
        </ButtonOption>
        <ButtonOption
          onClick={onClick}
          value={Weather.SAND}
          borderRadius="none"
          backgroundColor={isSelected(value, Weather.SAND)}
        >
          Sand
        </ButtonOption>
        <ButtonOption
          onClick={onClick}
          value={Weather.HAIL}
          borderRadius="right"
          backgroundColor={isSelected(value, Weather.HAIL)}
        >
          Hail
        </ButtonOption>
      </Grid>
      <Grid item>
        <ButtonOption
          onClick={onClick}
          value={Weather.HARSH_SUN}
          borderRadius="left"
          backgroundColor={isSelected(value, Weather.HARSH_SUN)}
        >
          Harsh Sun
        </ButtonOption>
        <ButtonOption
          onClick={onClick}
          value={Weather.HEAVY_RAIN}
          borderRadius="none"
          backgroundColor={isSelected(value, Weather.HEAVY_RAIN)}
        >
          Heavy Rain
        </ButtonOption>
        <ButtonOption
          onClick={onClick}
          borderRadius="right"
          value={Weather.STRONG_WINDS}
          backgroundColor={isSelected(value, Weather.STRONG_WINDS)}
        >
          Strong Winds
        </ButtonOption>
      </Grid>
    </Grid>
  );
};
