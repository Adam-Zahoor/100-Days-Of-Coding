let numArray: number[] = [4, 54, 62, 66, 33, 89, 95, 12, 24];

function numArrayDouble() {
    numArray.forEach(num => {
        let twice = num*2;
        let doubleNum: number[] = [];
        doubleNum.push(twice);
        console.log(doubleNum)
    });
};

numArrayDouble();