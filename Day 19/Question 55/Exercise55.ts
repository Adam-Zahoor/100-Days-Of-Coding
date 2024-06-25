//creating an array 'numArray' and initializing some numbers in it
let numArray: number[] = [4, 54, 62, 66, 33, 89, 95, 12, 24];

//creating a function which will multiply all the numbers by 2
function numArrayDouble() {
    numArray.forEach(num => {
        let twice = num*2;
        let doubleNum: number[] = [];
        doubleNum.push(twice);
        console.log(doubleNum)
    });
};

// calling our function
numArrayDouble();




