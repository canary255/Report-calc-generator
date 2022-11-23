export type WeatherProps = {
  value?: string;
  onClick: (e: any) => void;
};

export enum Weather {
  NONE = "",
  SUN = "sun",
  RAIN = "rain",
  SAND = "sand",
  HAIL = "hail",
  HARSH_SUN = "harsh_sun",
  HEAVY_RAIN = "heavy_rain",
  STRONG_WINDS = "strong_winds",
}
