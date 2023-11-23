import { toUpper } from "./../app/common";

describe("Commmon test suite", () => {
  test("should return upperCase", () => {
    const result = toUpper("abc");
    expect(result).toBe("ABC");
  });
});
