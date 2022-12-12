export type PokemonListProps = {
  list: {
    name: string;
    src: string;
    color: "red" | "green" | "yellow" | undefined;
  }[];
};
