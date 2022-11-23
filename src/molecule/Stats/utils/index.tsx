import { getBoost } from "../../../domains/getBoost";

enum NatureNames {
  ADAMANT = "adamant",
  BRAVE = "brave",
  NAUGHTY = "naughty",
  LONELY = "lonely",
  BOLD = "bold",
  TIMID = "timid",
  MODEST = "modest",
  CALM = "calm",
  MILD = "mild",
  RASH = "rash",
  QUIET = "quiet",
  IMPISH = "impish",
  JOLLY = "jolly",
  CAREFUL = "careful",
}

export const getPhysicalNatureMultiplier = (nature: string) => {
  switch (nature.toLowerCase()) {
    case NatureNames.ADAMANT:
    case NatureNames.BRAVE:
    case NatureNames.NAUGHTY:
    case NatureNames.LONELY:
      return 1.1;
    case NatureNames.BOLD:
    case NatureNames.TIMID:
    case NatureNames.MODEST:
    case NatureNames.CALM:
      return 0.9;
    default:
      return 1;
  }
};

export const getSpecialNatureMultiplier = (nature: string) => {
  switch (nature.toLowerCase()) {
    case NatureNames.MODEST:
    case NatureNames.QUIET:
    case NatureNames.MILD:
    case NatureNames.RASH:
      return 1.1;
    case NatureNames.JOLLY:
    case NatureNames.ADAMANT:
    case NatureNames.IMPISH:
    case NatureNames.CAREFUL:
      return 0.9;
    default:
      return 1;
  }
};

export const getStat = (
  base: string,
  ev: string,
  iv: string,
  boost: string,
  nature: string,
  isPhysical: boolean
) => {
  const natureMultiplier = isPhysical
    ? getPhysicalNatureMultiplier(nature)
    : getSpecialNatureMultiplier(nature);

  const baseInt = parseInt(base);
  const evInt = parseInt(ev) <= 252 ? parseInt(ev) : 252;
  const ivInt = parseInt(iv) <= 31 ? parseInt(iv) : 31;
  const boostMultiplier = getBoost(boost);
  const LEVEL = 50;

  const stat = Math.floor(
    (Math.floor(((2 * baseInt + ivInt + evInt / 4) * LEVEL) / 100) + 5) *
      natureMultiplier *
      boostMultiplier
  );

  return stat.toString();
};