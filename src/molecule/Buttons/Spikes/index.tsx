import { ButtonOption } from "../../../atom/Button";
import { SpikeProps, Spikes } from "../../../models/molecule/spike.model";
import { isSelected } from "../isSelected";

export const SpikesButton = ({ value = "0", onClick }: SpikeProps) => {
  return (
    <>
      <ButtonOption
        onClick={onClick}
        value={Spikes.NONE}
        borderRadius="left"
        backgroundColor={isSelected(value, Spikes.NONE)}
      >
        0
      </ButtonOption>
      <ButtonOption
        onClick={onClick}
        value={Spikes.ONE}
        borderRadius="none"
        backgroundColor={isSelected(value, Spikes.ONE)}
      >
        1
      </ButtonOption>
      <ButtonOption
        onClick={onClick}
        borderRadius="none"
        value={Spikes.TWO}
        backgroundColor={isSelected(value, Spikes.TWO)}
      >
        2
      </ButtonOption>
      <ButtonOption
        onClick={onClick}
        value={Spikes.THREE}
        borderRadius="right"
        backgroundColor={isSelected(value, Spikes.THREE)}
      >
        3 spikes
      </ButtonOption>
    </>
  );
};
