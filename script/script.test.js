const solveQuadraticEquation = require("./script");

describe("solveQuadraticEquation", () => {
  test("should return the correct roots for the given input", () => {
    expect(solveQuadraticEquation(2, -6, -3)).toEqual([3.44, -0.44]);
  });
});
