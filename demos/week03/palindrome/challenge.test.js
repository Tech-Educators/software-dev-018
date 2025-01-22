import { test, expect, describe } from "vitest";
import { palindrome } from "./challenge";

describe("Words that are palindromic", function () {
  test("madam", function () {
    const result = palindrome("madam");
    expect(result).toBe(true);
  });

  test("nurses run", function () {
    const result = palindrome("nurses run");
    expect(result).toBe(true);
  });

  test("Hannah", function () {
    const result = palindrome("Hannah");
    expect(result).toBe(true);
  });
});

describe("Words that are NOT palindromic", function () {
  test("Tim is great", function () {
    const result = palindrome("Tim is great");
    expect(result).toBe(false);
  });
  test("Weeeeeee", function () {
    const result = palindrome("Weeeeeee");
    expect(result).toBe(false);
  });
});
