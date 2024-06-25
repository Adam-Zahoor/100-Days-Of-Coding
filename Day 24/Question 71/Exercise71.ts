// assigning the variable 'x' a value and then reassigning a new value to it
let x = 50;
console.log(x);
// this will work as let keyword can be reassigned a new value
x = 55;
console.log(x);

// assigning the variable 'y' a value and then reassigning a new value to it
const y = 70;
// we used the try and catch method to check the error but the file won't get compiled because of the error in our code
try {
    y = 75;
} catch (error){
    console.log(error)
};