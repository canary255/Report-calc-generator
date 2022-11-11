import { ButtonOption } from "../../../atom/Button";

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
}

function isActivated(value: string, param: string) {
  return value === param ? "primary" : "inherit";
}

export const WeatherButton = ({ value = "", onClick }: WeatherProps) => {
  return (
    <>
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
    </>
  );
};
