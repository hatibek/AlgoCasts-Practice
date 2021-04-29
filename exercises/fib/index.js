// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//SOLUTION RECURSION
function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

module.exports = fib;

//TO BE DEBUGGED
// function fib(n) {
//   let fibArr = [0, 1];

//   for (let i = 0; i <= fibArr.length; i++) {
//     let total = 0;
//     while (i < n) {
//       total += fibArr[i];
//       fibArr.push(total);
//       i++;
//       console.log(total);
//     }
//   }
//   console.log(fibArr[n + 2]);
// }
