// Array Part 4 => Slice and Splice

var users = ['Ted', 'Tim', 'Tom', 'Sam', 'Sor', 'Sod'];

//console.log(users.slice(1));
// Print the Array values except the 1st value

//console.log(users.slice(1,3));
// Only prints the index range btw 1 to 3 => Tim, Tom 

users.splice(0, 2, 'Hi', 'Bye');
// Replace the 1st to 4th index values to Hi and Bye and prints everthing as same
console.log(users);
// => [ 'Ted', 'Hi', 'Bye', 'Sam', 'Sor', 'Sod' ]