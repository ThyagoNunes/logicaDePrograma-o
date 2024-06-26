/* 5 valores e no final vai retornar = soma, média, divisiveis p/5, nulos e pares */

function analizeNumbers(numbers) {
  let sum = 0;
  let media = 0;
  let divisibleForFive = 0;
  let totalNumbers = 0;
  let nulls = 0
  let pair = 0;

  numbers.map((number) => {
    totalNumbers += 1;
    sum += number;
    media = sum / totalNumbers;
    if (number % 5 === 0) {
      divisibleForFive += 1;
    }
    if (number === 0) {
      nulls += 1;
    }
    if (number % 2 === 0) {
      pair += 1;
    }
  })
  console.log(`Total numbers: ${totalNumbers}`);
  console.log(`Sum is: ${sum}`);
  console.log(`Media is: ${media}`);
  console.log(`Divisible for five: ${divisibleForFive} `)
  console.log(`Nulls: ${nulls}`)
  console.log(`pair: ${pair}`)

}

analizeNumbers([1,2,3,4,5])
