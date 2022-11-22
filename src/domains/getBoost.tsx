export const getBoost = (boost: string) => {
  if (boost === "-6") return 0.25;
  if (boost === "-5") return 0.29;
  if (boost === "-4") return 0.33;
  if (boost === "-3") return 0.4;
  if (boost === "-2") return 0.5;
  if (boost === "-1") return 0.67;
  if (boost === "1") return 1.5;
  if (boost === "2") return 2;
  if (boost === "3") return 2.5;
  if (boost === "4") return 3;
  if (boost === "5") return 3.5;
  if (boost === "6") return 4;
  return 1;
};
