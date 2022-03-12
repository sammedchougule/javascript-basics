// Array Part 3 => Fill and Filter

var testArry = [2, 4, 6, 8, 10, 11, 13];
//console.log(testArry.fill('Hi'));
// It will print every Array values as 'Hi'

//console.log(testArry.fill('Hi', 2));
// It will print every Array values as 'Hi' but after 2nd index
// => [2, 4, 'Hi', 'Hi', 'Hi', 'Hi', 'Hi']

const myNumber = [10, 20, 100, 30, 200, 50];

const result = myNumber.filter( (num) => num < 30)
// filters the given Array
console.log(result)