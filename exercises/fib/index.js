// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  let fibArr = [0, 1];

  for (let i = 0; i <= fibArr.length; i++) {
    let total = 0;
    while (i < n) {
      total += fibArr[i];
      fibArr.push(total);
      i++;
      console.log(total);
    }
  }
  console.log('FIB ARRAY', fibArr);
}

module.exports = fib;
