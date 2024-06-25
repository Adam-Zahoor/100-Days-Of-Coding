"use strict";
// creating a block scope and assigning the varibles x and y some values in it
{
    let x = 6;
    console.log(x);
    const y = 10;
    console.log(y);
}
;
// accessing the variable x outside the created block
try {
    console.log(x); //showing an error
}
catch (error) {
    console.log(error);
}
;
// accessing the variable y outside the created block
try {
    console.log(y); //showing an error
}
catch (error) {
    console.log(error);
}
;
