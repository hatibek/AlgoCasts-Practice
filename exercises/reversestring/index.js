// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//SOLUTION #1 LOOP
// function reverse(str) {
//   let arr = str.split('');
//   let reversedString = '';

//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversedString += arr[i];
//   }

//   return reversedString;
// }

//SOLUTION #2 POINTER
function reverse(str) {
  let reversedString = '';
  let lastLetterIdx = str.length - 1;

  while (lastLetterIdx >= 0) {
    reversedString += str[lastLetterIdx];
    lastLetterIdx--;
  }
  return reversedString;
}

//SOLUTION #3 ARRAY METHOD
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

//SOLUTION #4 REDUCE
// function reverse(str) {
//   return str.split('').reduce((rev, char) => char + rev, '');
// }

module.exports = reverse;
