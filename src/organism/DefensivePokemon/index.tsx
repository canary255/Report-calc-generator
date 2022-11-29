import { Grid } from "@mui/material";
import { ButtonOption } from "../../atom/Button";
import { DividerComponent } from "../../atom/Divider";
import { TypographyComponent } from "../../atom/Typography";
import { SelectorInput } from "../../molecule/SelectorInput";
import { TextInput } from "../../molecule/TextInput";

export const DefensivePokemon = () => {
  return (
    <>
      <Grid container direction="row" justifyContent="center" sx={{ mb: 4 }}>
        <Grid item xs={6} container justifyContent="center">
          <ButtonOption>All Pokemon</ButtonOption>
        </Grid>
        <Grid item xs={6} container justifyContent="center">
          <ButtonOption>Some Pokémon</ButtonOption>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ mt: 4, mb: 4 }}
          container
          justifyContent="center"
        >
          <TypographyComponent variant="body1">
            Specify Pokémon by writing the name and separating it with a comma.
          </TypographyComponent>
          <TextInput
            name="pokemonList"
            placeholder="Pikachu, Charizard, Mewtwo"
            fullWidth
          />
        </Grid>
        <Grid item xs={4} sx={{ mr: 2 }}>
          <SelectorInput name="defBoost" label="Def stat boost" />
        </Grid>
        <Grid item xs={4} sx={{ ml: 2 }}>
          <SelectorInput name="spdBoost" label="SpD stat boost" />
        </Grid>
      </Grid>
      <DividerComponent />
      <Grid
        container
        direction="row"
        justifyContent="center"
        sx={{ mt: 4 }}
      ></Grid>
    </>
  );
};
