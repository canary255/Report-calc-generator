import React, { useState } from "react";
import { Grid } from "@mui/material";
import { TypographyComponent } from "../../../atom/Typography";
import { ButtonOption } from "../../../atom/Button";

export const Loading = () => {
  return (
    <Grid container spacing={3} direction="column" alignItems="center">
      <Grid item xs={12} sm={6}>
        <TypographyComponent variant="h2">Loading...</TypographyComponent>
      </Grid>

      <Grid
        container
        direction="column"
        alignItems="center"
        item
        xs={12}
        sm={6}
        sx={{ marginTop: "25%" }}
      >
        <ButtonOption fontSize={24} width={256} height={128} borderRadius="all">
          Cancel
        </ButtonOption>
      </Grid>
    </Grid>
  );
};
