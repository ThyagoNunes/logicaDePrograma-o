function fibonacci(position) {
    let firstPosition = 0;
    let secondPosition = 1;
    let nextPosition;

    for(let i = 1; i < position; i++){
        nextPosition = firstPosition + secondPosition;
        firstPosition = secondPosition;
        secondPosition = nextPosition;
    }
    console.log(nextPosition);
}
fibonacci(11)

/* 0 1 1 2 3 5 8 13 21 34 55 89 144 */