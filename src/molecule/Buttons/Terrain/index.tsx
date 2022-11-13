import { ButtonOption } from "../../../atom/Button";
import { isSelected } from "../isSelected";

type TerrainProps = {
  value?: string;
  onClick: (e: any) => void;
};

enum Terrain {
  NONE = "",
  ELECTRIC = "electric",
  GRASSY = "grassy",
  MISTY = "misty",
  PSYCHIC = "psychic",
}

export const TerrainButton = ({ value = "", onClick }: TerrainProps) => {
  return (
    <>
      <ButtonOption
        onClick={onClick}
        value={Terrain.NONE}
        borderRadius="left"
        backgroundColor={isSelected(value, Terrain.NONE)}
      >
        None
      </ButtonOption>
      <ButtonOption
        onClick={onClick}
        value={Terrain.ELECTRIC}
        borderRadius="none"
        backgroundColor={isSelected(value, Terrain.ELECTRIC)}
      >
        Electric
      </ButtonOption>
      <ButtonOption
        onClick={onClick}
        borderRadius="none"
        value={Terrain.GRASSY}
        backgroundColor={isSelected(value, Terrain.GRASSY)}
      >
        Grassy
      </ButtonOption>
      <ButtonOption
        onClick={onClick}
        value={Terrain.MISTY}
        borderRadius="none"
        backgroundColor={isSelected(value, Terrain.MISTY)}
      >
        Misty
      </ButtonOption>
      <ButtonOption
        onClick={onClick}
        value={Terrain.PSYCHIC}
        borderRadius="right"
        backgroundColor={isSelected(value, Terrain.PSYCHIC)}
      >
        Psychic
      </ButtonOption>
    </>
  );
};
