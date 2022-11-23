export type TerrainProps = {
  value?: string;
  onClick: (e: any) => void;
};

export enum Terrain {
  NONE = "",
  ELECTRIC = "electric",
  GRASSY = "grassy",
  MISTY = "misty",
  PSYCHIC = "psychic",
}
