import { Grid } from "@mui/material";
import { DividerComponent } from "../../atom/Divider";
import { EffectComponent } from "./Sections/Effect";
import { FieldComponent } from "./Sections/Field";
import { DefensivePokemonSection } from "./Sections/Pokemon";

export const DefensivePokemon = () => {
  return (
    <>
      <Grid container sx={{ mb: 4 }} spacing={3}>
        <DefensivePokemonSection />
      </Grid>
      <DividerComponent />
      <Grid
        container
        direction="row"
        justifyContent="center"
        sx={{ mt: 4, mb: 4 }}
      >
        <FieldComponent />
      </Grid>
      <DividerComponent />
      <Grid container spacing={3} direction="row" sx={{ mt: 2 }}>
        <EffectComponent />
      </Grid>
    </>
  );
};
