import { ButtonOption } from "../../../atom/Button";
import { isActivated } from "../isActivated";

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
        backgroundColor={isActivated(value, Terrain.NONE)}
      >
        None
      </ButtonOption>
      <ButtonOption
        onClick={onClick}
        value={Terrain.ELECTRIC}
        borderRadius="none"
        backgroundColor={isActivated(value, Terrain.ELECTRIC)}
      >
        Electric
      </ButtonOption>
      <ButtonOption
        onClick={onClick}
        borderRadius="none"
        value={Terrain.GRASSY}
        backgroundColor={isActivated(value, Terrain.GRASSY)}
      >
        Grassy
      </ButtonOption>
      <ButtonOption
        onClick={onClick}
        value={Terrain.MISTY}
        borderRadius="none"
        backgroundColor={isActivated(value, Terrain.MISTY)}
      >
        Misty
      </ButtonOption>
      <ButtonOption
        onClick={onClick}
        value={Terrain.PSYCHIC}
        borderRadius="right"
        backgroundColor={isActivated(value, Terrain.PSYCHIC)}
      >
        Psychic
      </ButtonOption>
    </>
  );
};
