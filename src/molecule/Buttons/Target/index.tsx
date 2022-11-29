import { ButtonOption } from "../../../atom/Button";
import { TargetProps, Target } from "../../../models/molecule/target.model";
import { isSelected } from "../isSelected";

export const TargetButton = ({ value = "single", onClick }: TargetProps) => {
  return (
    <>
      <ButtonOption
        onClick={onClick}
        value={Target.SINGLE}
        borderRadius="left"
        backgroundColor={isSelected(value, Target.SINGLE)}
      >
        Single
      </ButtonOption>
      <ButtonOption
        onClick={onClick}
        value={Target.DOUBLE}
        borderRadius="right"
        backgroundColor={isSelected(value, Target.DOUBLE)}
      >
        Double
      </ButtonOption>
    </>
  );
};
