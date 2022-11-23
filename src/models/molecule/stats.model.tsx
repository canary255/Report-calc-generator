export type StatsProps = {
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
