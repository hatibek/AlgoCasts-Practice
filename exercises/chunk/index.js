// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   let chunked = [];

//   for (let element of array) {
//     //last element of the new array
//     const last = chunked[chunked.length - 1];

//     //if there is no last element in chunked or size of the new element is equal to the given size
//     if (!last || last.length === size) {
//       //pushes a new array chuck into chunked
//       chunked.push([element]);
//     } else {
//       //chunk already exists, adds the element to it
//       last.push(element);
//     }
//   }
//   return chunked;
// }

function chunk(array, size) {
  let chunked = [];
  let index = 0;

  //
  while (index < array.length) {
    //slices array in 'size' chunks, pushes sliced arrays into chunked
    chunked.push(array.slice(index, index + size));
    //increases the index because infinite loop === bad
    index += size;
  }
  return chunked;
}

module.exports = chunk;
