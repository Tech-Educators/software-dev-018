// getting my functions from my node module
import { test, expect, describe } from "vitest"; // destructuring

// getting my functions from my calculator.js
import { sum, multiply } from "./calculator";

describe("Sum Tests", function () {
  test("adds 1 and 2 to equal 3", function () {
    const result = sum(1, 2);
    const answer = 3;
    expect(result).toBe(answer);
  });
  test("adds 7 and 30 to equal 37", function () {
    const result = sum(7, 30);
    const answer = 37;
    expect(result).toBe(answer);
  });
});

describe("Multiply Tests", function () {
  test("multiplies 4 and 6 to equal 24", function () {
    const result = multiply(4, 6);
    const answer = 24;
    expect(result).toBe(answer);
  });
  test("multiplies 7 and 8 to equal 56", function () {
    const result = multiply(7, 8);
    const answer = 56;
    expect(result).toBe(answer);
  });
});
