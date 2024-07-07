function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    /* preciso achar o meio do array e quebrar em 2 partes o da esquerda e direita  */
    const middle = Math.floor(arr.length / 2);

    /* Recursividade para com todos os arrays achados até que reste uma única unidade de elemento */
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));

    return merge(left, right);
}

/* Arrays montados, comparar elemento e retornar um único array organizado */
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++;
        } else {
            result.push(right[rightIndex])
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++){
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

const arr = [82, 15, 43, 97, 69, 34, 6, 91, 20, 3, 50, 72, 86, 59, 24, 77, 10, 39, 18, 93, 55, 12, 88, 37, 65, 52, 29, 84, 47, 99];
console.log(quickSort(arr));
console.log(mergeSort(arr));


// Função de busca binária
function binarySearch(arr, target) {
    arr = quickSort(arr);
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Retorna o índice do elemento encontrado
        } else if (arr[mid] < target) {
            left = mid + 1; // Busca na metade direita
        } else {
            right = mid - 1; // Busca na metade esquerda
        }
    }
    return -1; // Retorna -1 se o elemento não for encontrado
}
// Exemplo de uso:
let array = [1,2,3,4,5,6,7]
let target = 6;
// Busca o elemento no array
let index = binarySearch(array, target);

if (index !== -1) {
    console.log(`O elemento ${target} foi encontrado no índice ${index}.`);
} else {
    console.log(`O elemento ${target} não foi encontrado no array.`);
}