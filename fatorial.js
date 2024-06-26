function factorial(number) {
  let sumFactorial = number
  for (let i = number; i > 1; i--) {
    sumFactorial = sumFactorial * ( i - 1)
  }
  console.log(sumFactorial);
}

factorial(5)

/* 5! = 5*4*3*2*1 */