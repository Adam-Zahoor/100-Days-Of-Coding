function average(...numbers: number[]) {
    let sum: number = numbers.reduce((prev, next) => {
        return prev + next;
    });
    let average: number = sum/numbers.length;
    console.log(average);
};

average(76,33,58,55,22,53,56);
