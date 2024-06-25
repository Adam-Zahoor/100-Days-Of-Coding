function dividingValues(num1: number, num2: number) {
    let quotient: number = num1/num2;
    let remainder: number = num1 % num2;
    let answers = {
        quotientOfTheValues: `After dividing both the values we get ${quotient} as the quotient`,
        remainderOfTheValues: `After dividing both the values we get ${remainder} as the remainder` 
    };
    console.log(answers);
};

dividingValues(5, 2);