const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -9, -8, -7, -6, -5, -4, -3, -2, -1,]

function totalNumbersNegative(numbers) {
  let storageNegativeNumbers = []
  let countNegativeNumbers = 0;
  numbers.map((number) => {
    if (number < 0) {
      storageNegativeNumbers += `${number}, `
      countNegativeNumbers += 1
    }
  })
  console.log(countNegativeNumbers);
  console.log(`[${storageNegativeNumbers}]`)
}

totalNumbersNegative(numbers);