import React, { useState } from "react";
import { Grid } from "@mui/material";
import { TypographyComponent } from "../../../atom/Typography";
import { ButtonOption } from "../../../atom/Button";

export const AppInfoAndButton = () => {
  return (
    <Grid container spacing={3} direction="row">
      <Grid item xs={12} sm={6}>
        <TypographyComponent variant="h6">
          Pokémon Report Generator
        </TypographyComponent>
        <TypographyComponent variant="body1">
          is a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          sagittis pellentesque sagittis. Nam tincidunt, enim id commodo
          finibus, quam tortor elementum nibh, eget imperdiet erat magna
          vulputate magna. Maecenas lacinia, sem ac euismod sodales, augue
          turpis dignissim felis, sit amet tempus magna ante vitae nunc.
        </TypographyComponent>
      </Grid>

      <Grid item xs={12} sm={6}>
        <TypographyComponent variant="h6">Instructions:</TypographyComponent>
        <ul>
          <li>
            <TypographyComponent variant="body1">
              Lorem ipsum dolor sit amet
            </TypographyComponent>
          </li>
          <li>
            <TypographyComponent variant="body1">
              Consectetur adipiscing elit
            </TypographyComponent>
          </li>
          <li>
            <TypographyComponent variant="body1">
              Proin sagittis pellentesque sagittis
            </TypographyComponent>
          </li>
          <li>
            <TypographyComponent variant="body1">
              Nam tincidunt, enim id commodo finibus
            </TypographyComponent>
          </li>
          <li>
            <TypographyComponent variant="body1">
              Quam tortor elementum nibh
            </TypographyComponent>
          </li>
          <li>
            <TypographyComponent variant="body1">
              Eget imperdiet erat magna vulputate magna
            </TypographyComponent>
          </li>
        </ul>
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
        <ButtonOption width={256} height={128} borderRadius="all">
          Generate report
        </ButtonOption>
      </Grid>
    </Grid>
  );
};
