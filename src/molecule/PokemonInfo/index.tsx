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
      sx={{ mt: 2, mb: 1, backgroundColor: getColor(pokemon?.color) }}
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
    <Grid container direction="row" alignItems="center">
      <Grid item xs={3}>
        <Sprite size={64} src={pokemon?.src} backgroundColor={pokemon?.color} />
      </Grid>
      <Grid item>
        <TypographyComponent variant="h5">{pokemon?.name}</TypographyComponent>
      </Grid>

      <ShowPokemonInfo pokemon={pokemon?.standard} type="standard" />
      <ShowPokemonInfo pokemon={pokemon?.extreme} type="extreme" />
      {pokemon.optimal ? (
        <ShowPokemonInfo pokemon={pokemon?.optimal} type="optimal" />
      ) : null}
    </Grid>
  );
};
