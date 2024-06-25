// storing some grades in an array 'grades'
var grades = [93, 84, 77, 66, 62, 59, 96, 72];
// using the reduce method to calculate the sum of the grades
var sum = grades.reduce(function (prev, next) {
    return prev + next;
});
console.log("Sum of all the numbers: ", sum);
// calculating the average using the variables grade and sum
var average = sum / grades.length;
console.log("Average of all the numbers: ", average);
