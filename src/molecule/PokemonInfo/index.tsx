import { Grid } from "@mui/material";
import { Sprite } from "../../atom/Sprite";
import { TypographyComponent } from "../../atom/Typography";
import { getColor } from "../../domains/getColor";
import {
  PokemonInfoProps,
  ShowInfoProps,
} from "../../models/molecule/pokemonInfo.model";

const ShowPokemonInfo = ({ pokemon, type }: ShowInfoProps) => {
  return (
    <Grid
      container
      direction="column"
      sx={{ m: 1, backgroundColor: getColor(pokemon?.color) }}
    >
      <Grid item>
        <TypographyComponent variant="body1">
          {`${type.charAt(0).toUpperCase() + type.slice(1)} 
          set: ${pokemon?.set}`}
        </TypographyComponent>
      </Grid>
      <Grid item>
        <TypographyComponent variant="body1">
          {pokemon?.message}
        </TypographyComponent>
      </Grid>
    </Grid>
  );
};

export const PokemonInfo = ({ pokemon }: PokemonInfoProps) => {
  return (
    <Grid container spacing={2} sx={{ ml: 2, mt: 1 }}>
      <Grid container direction="row" justifyContent="left" alignItems="center">
        <Sprite src={pokemon?.src} backgroundColor={pokemon?.color} />
        <TypographyComponent variant="h5">{pokemon?.name}</TypographyComponent>

        <ShowPokemonInfo pokemon={pokemon?.standard} type="standard" />
        <ShowPokemonInfo pokemon={pokemon?.extreme} type="extreme" />
        <ShowPokemonInfo pokemon={pokemon?.optimal} type="optimal" />
      </Grid>
    </Grid>
  );
};
