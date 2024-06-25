"use strict";
function average(...numbers) {
    let sum = numbers.reduce((prev, next) => {
        return prev + next;
    });
    let average = sum / numbers.length;
    console.log(average);
}
;
average(76, 33, 58, 55, 22, 53, 56);
