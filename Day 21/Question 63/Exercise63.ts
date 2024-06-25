type shape = {
    kind: "Circle"|"Rectangle",
    radius?: number,
    length?: number,
    width?: number,
};

let circle: shape = {
    kind: "Circle",
    radius: 12,
};

let rectangle: shape = {
    kind: "Rectangle",
    length: 25,
    width: 22,
};

console.log(circle);
console.log(rectangle);