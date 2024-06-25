let mixItems: any[] = ["Mohsin", "Jaafar", 76, "Bilal", 87, 45, "Ehsan", 65, 88];

let stringItem = mixItems.filter(item => typeof item === "string");
let numItem = mixItems.filter(item => typeof item === "number");

console.log(stringItem);
console.log(numItem);







