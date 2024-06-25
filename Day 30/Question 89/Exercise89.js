"use strict";
// creating a function that will take a string parameter and will convert the input to a number
function stringToNumber(string) {
    let numberConversion = parseInt(string);
    console.log(numberConversion);
    console.log(typeof numberConversion);
}
;
// calling the function with a string value that is a number
stringToNumber("6788");
