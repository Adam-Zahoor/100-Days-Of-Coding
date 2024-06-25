let a: number = 5;
console.log(`Before swapping, a = ${a}`);
let b: number = 10;
console.log(`Before swapping, b = ${b}`);


function swappingValues() {
    let temp = a;
    a = b;
    b = temp;

    console.log(`After swapping, "a = ${a} and b = ${b}"`)
};

swappingValues();