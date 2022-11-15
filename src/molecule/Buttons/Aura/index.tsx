import { ButtonOption } from "../../../atom/Button";
import { isSelected } from "../isSelected";

type AuraProps = {
  value?: string;
  onClick: (e: any) => void;
};

enum Aura {
  NONE = "",
  FAIRY = "fairy",
  DARK = "dark",
  BREAK = "break",
}

export const AuraButton = ({ value = "0", onClick }: AuraProps) => {
  return (
    <>
      <ButtonOption
        onClick={onClick}
        value={Aura.NONE}
        borderRadius="left"
        backgroundColor={isSelected(value, Aura.NONE)}
      >
        None
      </ButtonOption>
      <ButtonOption
        onClick={onClick}
        value={Aura.FAIRY}
        borderRadius="none"
        backgroundColor={isSelected(value, Aura.FAIRY)}
      >
        Fairy Aura
      </ButtonOption>
      <ButtonOption
        onClick={onClick}
        borderRadius="none"
        value={Aura.DARK}
        backgroundColor={isSelected(value, Aura.DARK)}
      >
        Dark Aura
      </ButtonOption>
      <ButtonOption
        onClick={onClick}
        value={Aura.BREAK}
        borderRadius="right"
        backgroundColor={isSelected(value, Aura.BREAK)}
      >
        Aura Break
      </ButtonOption>
    </>
  );
};