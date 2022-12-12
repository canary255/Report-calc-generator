import { Grid } from "@mui/material";
import { Sprite } from "../../atom/Sprite";
import { TypographyComponent } from "../../atom/Typography";
import { SymbolProps } from "../../models/molecule/symbol.model";

const TextContain = ({ color, children }: SymbolProps) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="left"
      alignItems="center"
      sx={{ mb: 2 }}
    >
      <Grid item xs={2}>
        <Sprite size={32} backgroundColor={color} />
      </Grid>
      <Grid item xs={8}>
        <TypographyComponent variant="body1">{children}</TypographyComponent>
      </Grid>
    </Grid>
  );
};

export const Symbol = () => {
  return (
    <>
      <Grid container justifyContent="left">
        <TextContain color="green">Can survive</TextContain>
        <TextContain color="yellow">Barely survive</TextContain>
        <TextContain color="red">Cannot survive</TextContain>
      </Grid>
    </>
  );
};
