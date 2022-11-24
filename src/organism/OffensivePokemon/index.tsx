import { Grid } from "@mui/material";
import { ButtonOption } from "../../atom/Button";
import { DividerComponent } from "../../atom/Divider";
import { RoundedImage } from "../../atom/RoundedImage";
import { AutocompleteComponent } from "../../molecule/AutocompleteComponent";
import { SelectorInput } from "../../molecule/SelectorInput";
import { Stats } from "../../molecule/Stats";

export const OffensivePokemon = () => {
  return (
    <Grid container spacing={2} direction="row" justifyContent="center">
      <Grid container item xs={12} direction="column" alignItems="center">
        <RoundedImage src={""} border={1} size={128} />
      </Grid>
      <Grid item xs={6}>
        <AutocompleteComponent name="pokemon" placeholder="Pokémon" />
      </Grid>
      <Grid item xs={6}>
        <AutocompleteComponent name="tera" placeholder="Tera Type" />
      </Grid>
      <Grid item xs={6}>
        <AutocompleteComponent name="ability" placeholder="Ability" />
      </Grid>
      <Grid item xs={6}>
        <AutocompleteComponent name="item" placeholder="Item" />
      </Grid>
      <Grid item xs={6}>
        <AutocompleteComponent name="move" placeholder="Select a move..." />
      </Grid>
      <Grid item xs={4}>
        <SelectorInput name="category" placeholder="Category" />
      </Grid>
      <Grid container item xs={12} direction="column" alignItems="center">
        <Grid item xs={6} sm={12}>
          <ButtonOption backgroundColor="inherit">Crit</ButtonOption>
        </Grid>
        <Grid item xs={6} sm={12}>
          <ButtonOption backgroundColor="inherit">Z-move</ButtonOption>
        </Grid>
        <Grid item xs={6} sm={12}>
          <ButtonOption backgroundColor="inherit">Dynamax</ButtonOption>
        </Grid>
        <Grid item xs={6} sm={12}>
          <ButtonOption backgroundColor="inherit">Terastal</ButtonOption>
        </Grid>
      </Grid>
      <Grid item xs={8}>
        <SelectorInput name="nature" placeholder="Nature" />
      </Grid>

      <Grid item xs={12}>
        <DividerComponent />
      </Grid>
      <Grid item xs={12}>
        <Stats stat={{}} />
      </Grid>
    </Grid>
  );
};
