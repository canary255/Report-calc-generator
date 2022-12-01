import { DividerComponent } from "../../atom/Divider";
import { EffectComponent } from "./Sections/Effect";
import { FieldComponent } from "./Sections/Field";
import { DefensivePokemonSection } from "./Sections/Pokemon";

export const DefensivePokemon = () => {
  return (
    <>
      <DefensivePokemonSection />

      <DividerComponent />

      <FieldComponent />

      <DividerComponent />

      <EffectComponent />
    </>
  );
};
