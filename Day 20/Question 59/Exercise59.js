"use strict";
// this function adds the value to a number
function adder(valueToBeAdded) {
    return function (number) {
        return number + valueToBeAdded;
    };
}
;
// we have created a function that adds five to any specific value
let fiveAddition = adder(5);
console.log(fiveAddition(10));
console.log(fiveAddition(65));
