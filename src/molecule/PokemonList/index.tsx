import { Grid } from "@mui/material";
import { Sprite } from "../../atom/Sprite";
import { PokemonListProps } from "../../models/molecule/pokemonList.model";

export const PokemonList = ({ list }: PokemonListProps) => {
  return (
    <Grid container spacing={2}>
      {list.map((item, index) => (
        <Grid item key={index} xs={12 / 5}>
          <Sprite src={item?.src} alt="Pokémon" backgroundColor={item?.color} />
        </Grid>
      ))}
    </Grid>
  );
};
