// creating an array and storing some fruit names in it
let arrayOfFruits: string[] = ["Apple","Banana","Peach","Watermelon"];
console.log("Before replacing the fruit: ", arrayOfFruits)

// accessing the index of the fruit banana
let indexOfBanana: number = arrayOfFruits.indexOf("Banana");

// replacing the fruit banana with mango
arrayOfFruits[indexOfBanana] = "Mango";

// logging the arrayOfFruits on the console to see that whether the fruit has been changed or not
console.log("After replacing the fruit: ", arrayOfFruits);



