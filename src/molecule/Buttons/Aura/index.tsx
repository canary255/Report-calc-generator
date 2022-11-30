import { ButtonOption } from "../../../atom/Button";
import { Aura, AuraProps } from "../../../models/molecule/aura.model";
import { isSelected } from "../isSelected";

export const AuraButton = ({ value = "", onClick }: AuraProps) => {
  const SIZE = "small";
  return (
    <>
      <ButtonOption
        onClick={onClick}
        value={Aura.NONE}
        borderRadius="left"
        backgroundColor={isSelected(value, Aura.NONE)}
        size={SIZE}
      >
        None
      </ButtonOption>
      <ButtonOption
        onClick={onClick}
        value={Aura.FAIRY}
        borderRadius="none"
        backgroundColor={isSelected(value, Aura.FAIRY)}
        size={SIZE}
      >
        Fairy Aura
      </ButtonOption>
      <ButtonOption
        onClick={onClick}
        borderRadius="none"
        value={Aura.DARK}
        backgroundColor={isSelected(value, Aura.DARK)}
        size={SIZE}
      >
        Dark Aura
      </ButtonOption>
      <ButtonOption
        onClick={onClick}
        value={Aura.BREAK}
        borderRadius="right"
        backgroundColor={isSelected(value, Aura.BREAK)}
        size={SIZE}
      >
        Aura Break
      </ButtonOption>
    </>
  );
};
