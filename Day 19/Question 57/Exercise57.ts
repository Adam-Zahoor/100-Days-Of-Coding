// storing some grades in an array 'grades'
let grades: number[] = [93, 84, 77, 66, 62, 59, 96, 72];

// using the reduce method to calculate the sum of the grades
let sum: number = grades.reduce((prev, next) => {
    return prev + next;
});
console.log(sum);

// calculating the average using the variables grade and sum
let average: number = sum/grades.length;
console.log(average);