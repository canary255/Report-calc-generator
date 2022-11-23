export type PokemonInfoProps = {
  pokemon: {
    src: string;
    color: "red" | "green" | "yellow" | undefined;
    name: string;
    standard: {
      set: string;
      message: string;
      color: "red" | "green" | "yellow" | undefined;
    };
    extreme: {
      set: string;
      message: string;
      color: "red" | "green" | "yellow" | undefined;
    };
    optimal: {
      set: string;
      message: string;
      color: "red" | "green" | "yellow" | undefined;
    };
  };
};

export type ShowInfoProps = {
  pokemon: {
    set: string;
    message: string;
    color: "red" | "green" | "yellow" | undefined;
  };
  type: "standard" | "extreme" | "optimal";
};
