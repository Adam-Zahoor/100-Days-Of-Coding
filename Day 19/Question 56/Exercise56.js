var mixItems = ["Mohsin", "Jaafar", 76, "Bilal", 87, 45, "Ehsan", 65, 88];
var stringItem = mixItems.filter(function (item) { return typeof item === "string"; });
var numItem = mixItems.filter(function (item) { return typeof item === "number"; });
console.log(stringItem);
console.log(numItem);
