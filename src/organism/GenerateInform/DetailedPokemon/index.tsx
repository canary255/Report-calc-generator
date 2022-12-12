import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import { ButtonOption } from "../../../atom/Button";
import { Symbol } from "../../../molecule/Symbol";
import { DividerComponent } from "../../../atom/Divider";
import { PokemonInfo } from "../../../molecule/PokemonInfo";
import { PokemonInfoProps } from "../../../models/molecule/pokemonInfo.model";

export const DetailedPokemon = ({ pokemon }: PokemonInfoProps) => {
  return (
    <Grid container spacing={3} direction="column" alignItems="center">
      <Grid item xs={12} sm={6}>
        <Symbol />
        <DividerComponent />
      </Grid>
      <Grid container direction="row" item xs={12}>
        <PokemonInfo pokemon={pokemon} />
        <DividerComponent />
      </Grid>

      <Grid item xs={12} sm={6}>
        <ButtonOption fontSize={14} width={256} height={64} borderRadius="all">
          Generate another report
        </ButtonOption>
      </Grid>
    </Grid>
  );
};
