function quickSort(arr) {
    // Caso base: arrays com 0 ou 1 elemento já estão ordenados
    if (arr.length <= 1) {
        return arr;
    }

    // Escolhendo o pivô como o último elemento do array
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    // Particionando o array em elementos menores e maiores que o pivô
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursivamente ordenando os subarrays à esquerda e à direita do pivô
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [82, 15, 43, 97, 69, 34, 6, 91, 20, 3, 50, 72, 86, 59, 24, 77, 10, 39, 18, 93, 55, 12, 88, 37, 65, 52, 29, 84, 47, 99];
console.log("Original array:", arr);
console.log("Array Ordenado:", quickSort(arr));