"use strict";
// writing a funtion that will square a number given by the user as a parameter
function squaringANumber(number) {
    console.log(number * number);
}
;
// creating a variable which has a function stored inside it that does the same task, of squaring a number
let squareNumber = function squaredNumber(aNumber) {
    console.log(aNumber * aNumber);
};
// calling both the function and the variable
squaringANumber(5);
squareNumber(4);
