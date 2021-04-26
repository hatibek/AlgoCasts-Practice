// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//SOLUTION #1 ARRAY METHODS
function vowels(str) {
  let allVowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  str
    .toLowerCase()
    .split('')
    .forEach((letter) => {
      if (allVowels.includes(letter)) {
        count++;
      }
    });
  return count;
}

// function vowels(str) {}
module.exports = vowels;
