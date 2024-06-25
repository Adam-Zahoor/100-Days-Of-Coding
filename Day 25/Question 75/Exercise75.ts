// creating a function which will perform some mathematical operations the value stored in the variable 'x'
function compoundOperators() {
    let x: number = 4;

    x += 5;
    console.log(`After addition, x = ${x}`);
    x -= 3;
    console.log(`After subtraction, x = ${x}`);
    x /= 3;
    console.log(`After division, x = ${x}`);
    x *= 4;
    console.log(`After multiplication, x = ${x}`);

};

// calling the function
compoundOperators();

