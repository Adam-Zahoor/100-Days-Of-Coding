function average() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var sum = numbers.reduce(function (prev, next) {
        return prev + next;
    });
    var average = sum / numbers.length;
    console.log(average);
}
;
average(76, 33, 58, 55, 22, 53, 56);
