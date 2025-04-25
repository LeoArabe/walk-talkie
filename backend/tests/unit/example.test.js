const calc = require("../../src/calc.js");

const x = 5;
const y = 3;

const result = calc(x, y);

test("espero q x seja y seja uma soma correta", () => {
  expect(result).toBe(x + y);
});
