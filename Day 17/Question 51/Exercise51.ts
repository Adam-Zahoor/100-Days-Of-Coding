// a normal function that will calculate the area of Rectangle
function rectangleAreaFunction(a: number, b: number) {
    console.log(a * b);
}; 
rectangleAreaFunction(6, 2);

// an arrow function that will calculate the area of rectangle
let arrowFunctionRectangleArea = (a: number, b: number): number => a * b;
console.log(arrowFunctionRectangleArea(6, 2));