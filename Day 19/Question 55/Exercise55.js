var numArray = [4, 54, 62, 66, 33, 89, 95, 12, 24];
function numArrayDouble() {
    numArray.forEach(function (num) {
        var twice = num * 2;
        var doubleNum = [];
        doubleNum.push(twice);
        console.log(doubleNum);
    });
}
;
numArrayDouble();
