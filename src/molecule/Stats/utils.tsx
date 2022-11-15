export const getPhysicalNatureMultiplier = (nature: string) => {
  switch (nature) {
    case "Adamant":
    case "Brave":
    case "Naughty":
    case "Lonely":
      return 1.1;
    case "Bold":
    case "Timid":
    case "Modest":
    case "Calm":
      return 0.9;
    default:
      return 1;
  }
};

export const getSpecialNatureMultiplier = (nature: string) => {
  switch (nature) {
    case "Modest":
    case "Quiet":
    case "Mild":
    case "Rash":
      return 1.1;
    case "Jolly":
    case "Adamant":
    case "Impish":
    case "Careful":
      return 0.9;
    default:
      return 1;
  }
};

export const getStat = (
  base: string,
  ev: string,
  iv: string,
  nature: string,
  isPhysical: boolean
) => {
  const natureMultiplier = isPhysical
    ? getPhysicalNatureMultiplier(nature)
    : getSpecialNatureMultiplier(nature);

  const baseInt = parseInt(base);
  const evInt = parseInt(ev) <= 252 ? parseInt(ev) : 252;
  const ivInt = parseInt(iv) <= 31 ? parseInt(iv) : 31;
  const LEVEL = 50;

  const stat = Math.floor(
    (Math.floor(((2 * baseInt + ivInt + evInt / 4) * LEVEL) / 100) + 5) *
      natureMultiplier
  );

  return stat.toString();
};
