const merge = require('./merge')

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return merge(left, right)
}

const arr = [82, 15, 43, 97, 69, 34, 6, 91, 20, 3, 50, 72, 86, 59, 24, 77, 10, 39, 18, 93, 55, 12, 88, 37, 65, 52, 29, 84, 47, 99];
console.log("Original array:", arr);
console.log("Sorted array:", mergeSort(arr));