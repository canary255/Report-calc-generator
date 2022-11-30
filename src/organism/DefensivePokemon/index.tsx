import { Box, Grid } from "@mui/material";
import { ButtonOption } from "../../atom/Button";
import { DividerComponent } from "../../atom/Divider";
import { TypographyComponent } from "../../atom/Typography";
import { AuraButton } from "../../molecule/Buttons/Aura";
import { SpikesButton } from "../../molecule/Buttons/Spikes";
import { TargetButton } from "../../molecule/Buttons/Target";
import { TerrainButton } from "../../molecule/Buttons/Terrain";
import { WeatherButton } from "../../molecule/Buttons/Weather";
import { SelectorInput } from "../../molecule/SelectorInput";
import { TextInput } from "../../molecule/TextInput";

export const DefensivePokemon = () => {
  return (
    <>
      <Grid container sx={{ mb: 4 }} spacing={3}>
        <Grid item xs={6} container justifyContent="center">
          <ButtonOption>All Pokemon</ButtonOption>
        </Grid>
        <Grid item xs={6} container justifyContent="center">
          <ButtonOption>Some Pokémon</ButtonOption>
        </Grid>
        <Grid item xs={12}>
          <TypographyComponent variant="body1">
            Specify Pokémon by writing the name and separating it with a comma.
          </TypographyComponent>
          <TextInput
            name="pokemonList"
            placeholder="Pikachu, Charizard, Mewtwo"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }} container justifyContent="center">
          <Grid item xs={4} sx={{ mr: 2 }}>
            <SelectorInput name="defBoost" label="Def stat boost" />
          </Grid>
          <Grid item xs={4} sx={{ ml: 2 }}>
            <SelectorInput name="spdBoost" label="SpD stat boost" />
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <TargetButton onClick={() => {}} />
        </Grid>
      </Grid>
      <DividerComponent />
      <Grid
        container
        direction="column"
        alignItems="center"
        sx={{ mt: 4, mb: 4 }}
      >
        <Box>
          <TerrainButton onClick={() => {}} />
        </Box>
        <Box sx={{ mt: 4 }}>
          <WeatherButton onClick={() => {}} />
        </Box>
        <Box sx={{ mt: 4 }}>
          <AuraButton onClick={() => {}} />
        </Box>
        <Box sx={{ mt: 4 }}>
          <ButtonOption>Gravity</ButtonOption>
        </Box>
      </Grid>
      <DividerComponent />
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
    </>
  );
};
