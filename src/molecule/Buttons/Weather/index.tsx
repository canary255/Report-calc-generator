import { Grid } from "@mui/material";
import { ButtonOption } from "../../../atom/Button";
import { isActivated } from "../isActivated";

type WeatherProps = {
  value?: string;
  onClick: (e: any) => void;
};

enum Weather {
  NONE = "",
  SUN = "sun",
  RAIN = "rain",
  SAND = "sand",
  HAIL = "hail",
  HARSH_SUN = "harsh_sun",
  HEAVY_RAIN = "heavy_rain",
  STRONG_WINDS = "strong_winds",
}

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
          backgroundColor={isActivated(value, Weather.NONE)}
        >
          None
        </ButtonOption>
        <ButtonOption
          onClick={onClick}
          value={Weather.SUN}
          borderRadius="none"
          backgroundColor={isActivated(value, Weather.SUN)}
        >
          Sun
        </ButtonOption>
        <ButtonOption
          onClick={onClick}
          borderRadius="none"
          value={Weather.RAIN}
          backgroundColor={isActivated(value, Weather.RAIN)}
        >
          Rain
        </ButtonOption>
        <ButtonOption
          onClick={onClick}
          value={Weather.SAND}
          borderRadius="none"
          backgroundColor={isActivated(value, Weather.SAND)}
        >
          Sand
        </ButtonOption>
        <ButtonOption
          onClick={onClick}
          value={Weather.HAIL}
          borderRadius="right"
          backgroundColor={isActivated(value, Weather.HAIL)}
        >
          Hail
        </ButtonOption>
      </Grid>
      <Grid item>
        <ButtonOption
          onClick={onClick}
          value={Weather.HARSH_SUN}
          borderRadius="left"
          backgroundColor={isActivated(value, Weather.HARSH_SUN)}
        >
          Harsh Sun
        </ButtonOption>
        <ButtonOption
          onClick={onClick}
          value={Weather.HEAVY_RAIN}
          borderRadius="none"
          backgroundColor={isActivated(value, Weather.HEAVY_RAIN)}
        >
          Heavy Rain
        </ButtonOption>
        <ButtonOption
          onClick={onClick}
          borderRadius="right"
          value={Weather.STRONG_WINDS}
          backgroundColor={isActivated(value, Weather.STRONG_WINDS)}
        >
          Strong Winds
        </ButtonOption>
      </Grid>
    </Grid>
  );
};
