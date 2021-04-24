// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//SOLUTION #1 ARRAY METHODS
// function palindrome (str) {
//   let reversedString = str.split('').reverse().join('');
//   return str === reversedString ? true : false;
// }

//SOLUTION #2 POINTERS
// function palindrome(str) {
//   let reversedStr = '';
//   let lastCharIdx = str.length - 1;

//   while (lastCharIdx >= 0) {
//     reversedStr += str[lastCharIdx];
//     lastCharIdx--;
//   }
//   return str === reversedStr ? true : false;
// }

//SOLUTION #3
function palindrome(str) {
  return str.split('').every((char, i) => char === str[str.length - i - 1]);
}

module.exports = palindrome;
