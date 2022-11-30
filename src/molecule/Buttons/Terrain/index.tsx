import { ButtonOption } from "../../../atom/Button";
import { Terrain, TerrainProps } from "../../../models/molecule/terrain.model";
import { isSelected } from "../isSelected";

export const TerrainButton = ({ value = "", onClick }: TerrainProps) => {
  const SIZE = "small";
  return (
    <>
      <ButtonOption
        onClick={onClick}
        value={Terrain.NONE}
        borderRadius="left"
        backgroundColor={isSelected(value, Terrain.NONE)}
        size={SIZE}
      >
        None
      </ButtonOption>
      <ButtonOption
        onClick={onClick}
        value={Terrain.ELECTRIC}
        borderRadius="none"
        backgroundColor={isSelected(value, Terrain.ELECTRIC)}
        size={SIZE}
      >
        Electric
      </ButtonOption>
      <ButtonOption
        onClick={onClick}
        borderRadius="none"
        value={Terrain.GRASSY}
        backgroundColor={isSelected(value, Terrain.GRASSY)}
        size={SIZE}
      >
        Grassy
      </ButtonOption>
      <ButtonOption
        onClick={onClick}
        value={Terrain.MISTY}
        borderRadius="none"
        backgroundColor={isSelected(value, Terrain.MISTY)}
        size={SIZE}
      >
        Misty
      </ButtonOption>
      <ButtonOption
        onClick={onClick}
        value={Terrain.PSYCHIC}
        borderRadius="right"
        backgroundColor={isSelected(value, Terrain.PSYCHIC)}
        size={SIZE}
      >
        Psychic
      </ButtonOption>
    </>
  );
};
