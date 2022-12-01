import React, { useState } from "react";
import { Grid } from "@mui/material";
import { ButtonOption } from "../../../../atom/Button";
import { SpikesButton } from "../../../../molecule/Buttons/Spikes";

export const EffectComponent = () => {
  return (
    <Grid container spacing={3} direction="row" sx={{ mt: 2 }}>
      <Grid item xs={4} container justifyContent="center">
        <ButtonOption>Protect</ButtonOption>
      </Grid>
      <Grid item xs={4} container justifyContent="center">
        <ButtonOption>Stealth Rock</ButtonOption>
      </Grid>
      <Grid item xs={4} container justifyContent="center">
        <ButtonOption>Foresight</ButtonOption>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <SpikesButton onClick={() => {}} />
      </Grid>
      <Grid item xs={4} container justifyContent="center">
        <ButtonOption>Helping Hand</ButtonOption>
      </Grid>
      <Grid item xs={4} container justifyContent="center">
        <ButtonOption>Tailwind</ButtonOption>
      </Grid>
      <Grid item xs={4} container justifyContent="center">
        <ButtonOption>Battery</ButtonOption>
      </Grid>
      <Grid item xs={6} container justifyContent="center">
        <ButtonOption>Reflect</ButtonOption>
      </Grid>
      <Grid item xs={6} container justifyContent="center">
        <ButtonOption>Light Screen</ButtonOption>
      </Grid>
      <Grid item xs={6} container justifyContent="center">
        <ButtonOption>Aurora Veil</ButtonOption>
      </Grid>
      <Grid item xs={6} container justifyContent="center">
        <ButtonOption>Friend Guard</ButtonOption>
      </Grid>
    </Grid>
  );
};
