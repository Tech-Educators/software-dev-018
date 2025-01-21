import { test, expect, describe } from "vitest";

describe("adding numbers together", function () {
  test("1 plus 2", function () {
    const result = add(1, 2);
    const expected = 3;
    expect(result).toBe(expected);
  });
});

describe("Words that are palindromic", function () {
  test("madam", function () {
    const result = palindrome("madam");
    expect(result).toBe(true);
  });

  test("nurses run", function () {
    const result = palindrome("nurses run");
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
