"use strict";
let myProfile = function () {
    let name = "Adam";
    let age = 21;
    return { displayInfo: function () {
            console.log(`Name: ${name}, Age: ${age}`);
        } };
}();
myProfile.displayInfo();
