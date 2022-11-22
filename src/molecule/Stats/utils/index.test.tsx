import { describe, expect, test } from "@jest/globals";
import { getStat } from ".";

// Obtain attack and special attack from a pokemon

describe("Testing getStats function", () => {
  it("Obtain base 30 Attack with max EVs and IVs, no boost and favourable nature, 90", () => {
    expect(getStat("30", "252", "31", "0", "adamant", true)).toBe("90");
  });

  it("Obtain base 30 Attack with 0 EVs 0 IVs, no boost and unfavourable nature, 31", () => {
    expect(getStat("30", "0", "0", "0", "modest", true)).toBe("31");
  });

  it("Obtain base 150 Attack with 124 EVs 24 IVs, no boost and favourable nature, 200", () => {
    expect(getStat("150", "124", "24", "0", "adamant", true)).toBe("200");
  });

  it("Obtain base 140 Attack with 16 EVs 3 IVs, no boost and neutral nature, 148", () => {
    expect(getStat("140", "16", "3", "0", "serious", true)).toBe("148");
  });

  it("Obtain base 70 Attack with 244 EVs 31 IVs, +4 boost and favourable nature, 399", () => {
    expect(getStat("70", "244", "31", "4", "adamant", true)).toBe("399");
  });

  it("Obtain base 125 Special Attack with 252 EVs 31 IVs, -4 boost and favourable nature, 64", () => {
    expect(getStat("125", "252", "31", "-4", "modest", false)).toBe("64");
  });
});
