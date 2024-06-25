"use strict";
// creating a function that prints numbers to 5 and uses let keyword
function printingNumbersWithLetLoop() {
    for (let i = 0; i < 5; i++) {
        console.log("I love TypeScript");
    }
    ;
}
;
// when the block ends 'i' won't be accesible as the let keyword is used with it
printingNumbersWithLetLoop();
