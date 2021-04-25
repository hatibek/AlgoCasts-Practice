// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  //every char is a prop and quantity is value
  const charMap = {};

  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {
      //if char exists in the map add 1
      charMap[char]++;
    } else {
      //if char does not exist create the prop
      charMap[char] = 1;
    }
  }

  //objects use 'in'
  for (let char in charMap) {
    //a value is larger than the current max
    if (charMap[char] > max) {
      //assign the value to max
      max = charMap[char];
      //assign the prop to 'char'
      maxChar = char;
    }
    return char;
  }
}

module.exports = maxChar;
