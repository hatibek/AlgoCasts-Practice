// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let capitalizedString = str[0].toUpperCase();

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === ' ') {
      capitalizedString += str[i + 1].toUpperCase();
    } else {
      capitalizedString += str[i + 1];
    }
  }

  return capitalizedString;
}

module.exports = capitalize;
