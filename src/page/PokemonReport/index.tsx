import React, { useState } from "react";
import { Grid } from "@mui/material";
import { OffensivePokemon } from "../../organism/OffensivePokemon";
import { DefensivePokemon } from "../../organism/DefensivePokemon";
import { AppInfoAndButton } from "../../organism/GenerateInform/AppInfoAndButton";

export const PokemonReport = () => {
  const offensive = {
    stat: {
      baseAtk: "185",
      evAtk: "252",
      ivAtk: "31",
      boostAtk: "6",
      baseSpa: "80",
      evSpa: "0",
      ivSpa: "31",
      boostSpa: "0",
      nature: "Adamant",
    },
  };

  return (
    <Grid container direction="row">
      <Grid item xs={4}>
        <OffensivePokemon offensive={offensive} />
      </Grid>
      <Grid item xs={4}>
        <DefensivePokemon />
      </Grid>
      <Grid item xs={4}>
        <AppInfoAndButton />
      </Grid>
    </Grid>
  );
};
