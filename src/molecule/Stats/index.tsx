import { Grid } from "@mui/material";
import { Label } from "../../atom/Label";
import { Selector } from "../../atom/Selector";
import { TextFieldComponent } from "../../atom/Textfield";
import { boostValues } from "../../domains/boostValues";
import { getStat } from "./utils";

type StatsProps = {
  stat: {
    baseAtk: string;
    evAtk: string;
    ivAtk: string;
    boostAtk: string;
    baseSpa: string;
    evSpa: string;
    ivSpa: string;
    boostSpa: string;
    nature: string;
  };
  setPokemonStat?: (stat: any) => void;
};

const Header = () => {
  return (
    <Grid container spacing={2} justifyContent="left" alignItems="center">
      <Grid item xs={2}>
        <Label name="base"> </Label>
      </Grid>
      <Grid item xs={2}>
        <Label name="base">Base</Label>
      </Grid>
      <Grid item xs={2}>
        <Label name="iv">IV</Label>
      </Grid>
      <Grid item xs={2}>
        <Label name="ev">EV</Label>
      </Grid>
    </Grid>
  );
};

export const Stats = ({ stat }: StatsProps) => {
  return (
    <Grid>
      <Grid container item xs={5} direction="row">
        <Header />
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={2}>
            <Label name="atk">Atk</Label>
          </Grid>
          <Grid item xs={2}>
            <TextFieldComponent
              value={stat.baseAtk}
              name="baseAtk"
              readOnly
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
            <TextFieldComponent value={stat.ivAtk} name="ivAtk" fullWidth />
          </Grid>
          <Grid item xs={2}>
            <TextFieldComponent value={stat.evAtk} name="evAtk" fullWidth />
          </Grid>
          <Grid item xs={2}>
            <Label name="stats">
              {getStat(
                stat.baseAtk,
                stat.evAtk,
                stat.ivAtk,
                stat.boostAtk,
                stat.nature,
                true
              )}
            </Label>
          </Grid>
          <Grid item xs={2}>
            <Selector value="0" name="boostAtk" options={boostValues} />
          </Grid>
        </Grid>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={2}>
            <Label name="spa">SpA</Label>
          </Grid>
          <Grid item xs={2}>
            <TextFieldComponent
              value={stat.baseSpa}
              name="baseSpa"
              readOnly
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
            <TextFieldComponent value={stat.ivSpa} name="ivSpa" fullWidth />
          </Grid>
          <Grid item xs={2}>
            <TextFieldComponent value={stat.evSpa} name="evSpa" fullWidth />
          </Grid>
          <Grid item xs={2}>
            <Label name="statsSpa">
              {getStat(
                stat.baseSpa,
                stat.evSpa,
                stat.ivSpa,
                stat.boostSpa,
                stat.nature,
                false
              )}
            </Label>
          </Grid>
          <Grid item xs={2}>
            <Selector value="0" name="boostSpa" options={boostValues} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
