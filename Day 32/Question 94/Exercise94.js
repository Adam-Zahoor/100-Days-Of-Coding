"use strict";
// creating an array with some names in it
let arrayOfNames = ["Hamza", "Ibraahim", "Haajra", "Wahaab"];
// creating a variable in which we have applied the map method which counts the number of letters in each name
const numOfLettersInNames = arrayOfNames.map((name) => name.length);
// logging the variable which will return the number of letters in each name
console.log(numOfLettersInNames);
