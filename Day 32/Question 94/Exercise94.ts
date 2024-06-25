// creating an array with some names in it
let arrayOfNames: string[] = ["Hamza", "Ibraahim", "Haajra", "Wahaab"];

// creating a variable in which we have applied the map method which counts the number of letters in each name
const numOfLettersInNames: number[] = arrayOfNames.map((name) => 
    name.length
);

// logging the variable which will return the number of letters in each name
console.log(numOfLettersInNames);
