import React, { useState } from "react";
import { Grid } from "@mui/material";
import { ButtonOption } from "../../../atom/Button";
import { Symbol } from "../../../molecule/Symbol";
import { DividerComponent } from "../../../atom/Divider";
import { PokemonList } from "../../../molecule/PokemonList";
import { ResultProps } from "../../../models/organism/result.model";

export const Result = ({ list }: ResultProps) => {
  return (
    <Grid container spacing={3} direction="column" alignItems="center">
      <Grid item xs={12} sm={6}>
        <Symbol />
        <DividerComponent />
      </Grid>
      <Grid
        container
        direction="row"
        item
        xs={12}
        sx={{
          maxHeight: "255px",
          maxWidth: "100%",
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        <PokemonList list={list} />
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
