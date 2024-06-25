"use strict";
// using the previously created object 'myCar'
const myCar = {
    make: "Toyota",
    model: "Toyota Yaris",
    year: 2022,
};
// using 'Object.assign' to add the color property in our object
Object.assign(myCar, { color: "Red" });
// changing the year property in the object
myCar.year = 2023;
console.log(myCar);
