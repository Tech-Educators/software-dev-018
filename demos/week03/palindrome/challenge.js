export function palindrome(string) {
  const cleanString = string.replaceAll(" ", "").toLowerCase(); // clean up the string
  const reversedString = cleanString.split("").reverse().join(""); // reverse it

  // check if the clean string is equal to the reverse string (palindrome init)
  if (cleanString === reversedString) {
    return true;
  } else {
    return false;
  }
}
