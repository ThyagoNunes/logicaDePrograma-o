/* 
  Essa ordenação é por meio de quebra do array ao meio e usado recursividade até que exista apenas uma única fração contendo um elemento
  [9, 3, 0, 5, 8, 4]
  1 [9,3,0]
    1.1 [9] [3,0]
      1.2 [9] [3] [0]
        1.3 [9] compare [3] e [0]
          1.4 [3] > [0]
            1,5 [3,0]
              1.6 [9] > [0,3]
                1.7 [0, 3, 9]
  2 [5,8,4]
   2.1 [5] [8,4]
      2.2 [5] [8] [4]
        2.3 [5] compare [8] e [4]
          2.4 [8] > [4]
            2,5 [8,4]
              2.6 [5] > [4,8]
                2.7 [4, 5, 8]
  3 [0, 3, 9] [4, 5, 8]
    3,1 0 > 4 ? [0, ]
      3.2 3 > 4 ? [0, 3]
        3.3 9 > 4 ? [0, 3, 4]
          3.4 9 > 5 ? [0, 3, 4, 5]
            3.5 9 > 8 ? [0, 3, 4, 5, 8]
              3.6 [0, 3, 4, 5, 8, 9] 
*/

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    const middle = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));
    
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    // Aqui eu construo o array com os elementos ordenados da esquerda e direita 
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const arr = [82, 15, 43, 97, 69, 34, 6, 91, 20, 3, 50, 72, 86, 59, 24, 77, 10, 39, 18, 93, 55, 12, 88, 37, 65, 52, 29, 84, 47, 99];
console.log("Original array:", arr);
console.log("Sorted array:", mergeSort(arr));