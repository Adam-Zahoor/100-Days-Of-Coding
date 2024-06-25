"use strict";
function dividingValues(num1, num2) {
    let quotient = num1 / num2;
    let remainder = num1 % num2;
    let answers = {
        quotientOfTheValues: `After dividing both the values we get ${quotient} as the quotient`,
        remainderOfTheValues: `After dividing both the values we get ${remainder} as the remainder`
    };
    console.log(answers);
}
;
dividingValues(5, 2);
