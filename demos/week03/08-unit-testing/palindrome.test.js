import { test, expect } from "vitest";

function isPalindrome() {
  return "needs to be written...";
}

test("is taco cat a palindrome?", function () {
  const result = isPalindrome("hannah");
  const answer = "hannah";
  expect(result).toBe(answer);
});

// write your own tests as well!
