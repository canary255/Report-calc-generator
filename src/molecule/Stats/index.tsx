import { Grid } from "@mui/material";
import { Label } from "../../atom/Label";
import { Selector } from "../../atom/Selector";
import { TextFieldComponent } from "../../atom/Textfield";
import { boostValues } from "../../domains/boostValues";
import { StatsProps } from "../../models/molecule/stats.model";
import { SelectorInput } from "../SelectorInput";
import { getStat } from "./utils/index";

const Header = () => {
  return (
    <Grid container spacing={2} justifyContent="left" alignItems="center">
      <Grid item xs={1.8}>
        <Label name="base"> </Label>
      </Grid>
      <Grid item xs={2.8}>
        <Label name="base">Base</Label>
      </Grid>
      <Grid item xs={2.5}>
        <Label name="iv">IV</Label>
      </Grid>
      <Grid item xs={2.8}>
        <Label name="ev">EV</Label>
      </Grid>
    </Grid>
  );
};

export const Stats = ({ stat }: StatsProps) => {
  return (
    <Grid>
      <Header />
      <Grid container spacing={2} justifyContent="left" alignItems="center">
        <Grid item xs={1.8}>
          <Label name="atk">Atk</Label>
        </Grid>
        <Grid item xs={2.8}>
          <TextFieldComponent
            value={stat?.baseAtk}
            name="baseAtk"
            readOnly
            fullWidth
          />
        </Grid>
        <Grid item xs={2.5}>
          <TextFieldComponent value={stat?.ivAtk} name="ivAtk" fullWidth />
        </Grid>
        <Grid item xs={2.8}>
          <TextFieldComponent value={stat?.evAtk} name="evAtk" fullWidth />
        </Grid>
        <Grid item xs={2.1}>
          <Label name="stats">
            {getStat(
              stat?.baseAtk,
              stat?.evAtk,
              stat?.ivAtk,
              stat?.boostAtk,
              stat?.nature,
              true
            )}
          </Label>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        sx={{ mb: 2, mt: 2 }}
        item
        xs={12}
      >
        <Grid item xs={8}>
          <SelectorInput
            value={stat?.boostAtk}
            placeholder="Boost"
            name="boostAtk"
            options={boostValues}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={1.8}>
          <Label name="spa">SpA</Label>
        </Grid>
        <Grid item xs={2.8}>
          <TextFieldComponent
            value={stat?.baseSpa}
            name="baseSpa"
            readOnly
            fullWidth
          />
        </Grid>
        <Grid item xs={2.5}>
          <TextFieldComponent value={stat?.ivSpa} name="ivSpa" fullWidth />
        </Grid>
        <Grid item xs={2.8}>
          <TextFieldComponent value={stat?.evSpa} name="evSpa" fullWidth />
        </Grid>
        <Grid item xs={2.1}>
          <Label name="statsSpa">
            {getStat(
              stat?.baseSpa,
              stat?.evSpa,
              stat?.ivSpa,
              stat?.boostSpa,
              stat?.nature,
              false
            )}
          </Label>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          sx={{ mb: 2, mt: 2 }}
          item
          xs={12}
        >
          <Grid item xs={8}>
            <SelectorInput
              value={stat?.boostSpa}
              name="boostSpa"
              placeholder="Boost"
              options={boostValues}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
