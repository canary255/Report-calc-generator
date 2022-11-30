import { Grid } from "@mui/material";
import { ButtonOption } from "../../../../atom/Button";
import { TypographyComponent } from "../../../../atom/Typography";
import { TargetButton } from "../../../../molecule/Buttons/Target";
import { SelectorInput } from "../../../../molecule/SelectorInput";
import { TextInput } from "../../../../molecule/TextInput";

export const DefensivePokemonSection = () => {
  return (
    <>
      <Grid item xs={6} container justifyContent="center">
        <ButtonOption>All Pokemon</ButtonOption>
      </Grid>
      <Grid item xs={6} container justifyContent="center">
        <ButtonOption>Some Pokémon</ButtonOption>
      </Grid>
      <Grid item xs={12}>
        <TypographyComponent variant="body1">
          Specify Pokémon by writing the name and separating it with a comma.
        </TypographyComponent>
        <TextInput
          name="pokemonList"
          placeholder="Pikachu, Charizard, Mewtwo"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sx={{ mb: 4 }} container justifyContent="center">
        <Grid item xs={4} sx={{ mr: 2 }}>
          <SelectorInput name="defBoost" label="Def stat boost" />
        </Grid>
        <Grid item xs={4} sx={{ ml: 2 }}>
          <SelectorInput name="spdBoost" label="SpD stat boost" />
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <TargetButton onClick={() => {}} />
      </Grid>
    </>
  );
};
