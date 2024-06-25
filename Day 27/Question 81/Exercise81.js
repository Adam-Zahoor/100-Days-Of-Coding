"use strict";
const myObject = {
    name: "Adam",
    age: 21,
    qualification: "O-levels",
    height: 6,
    eyeColor: "brown",
    hairColor: "brown"
};
function propertiesOfObject(obj) {
    for (let keys in myObject) {
        console.log(`${keys}: ${myObject[keys]}`);
    }
    ;
}
;
propertiesOfObject(myObject);
