function fibonacci(position) {
    let firstPosition = 0;
    let secondPosition = 1;
    let valuesFibonacci = [firstPosition, secondPosition]
        
    for (let i = 2; i < position; i++){

        let nextPosition = firstPosition + secondPosition ;
        valuesFibonacci.push(nextPosition);

        firstPosition = secondPosition;
        secondPosition = nextPosition;
    }
    console.log(valuesFibonacci);
}
fibonacci(15)