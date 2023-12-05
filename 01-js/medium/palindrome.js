/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  var newStr = str.replace(/[\s.,\/#!$%\^&\*;?:{}=\-_`~()]/g, "").toLowerCase();
  var str2 = newStr.split("").reverse().join("");
  if (str2 === newStr) return true;
  return false;
}

module.exports = isPalindrome;
