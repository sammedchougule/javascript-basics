// ->Execution Context (function 1)
// ->Execution Context (function 2)
// ->Execution Context (function 3)
// =>Global Context
// After Executing the Execution Context it then go for Global Context

// var num = 2;

// function sayMe (){
//     console.log("Say Me");
// }

// sayMe();


// Execution Context =>" Variable Object, Scope Chain, this " 

// 1) Function declarations are scanned and made available

// tipper("50");

// function tipper(a){
//     var bill = parseInt(a);
//     // parseInt converts string to integer
//     console.log(bill + 5);
// }

// bigTipper("200")

// var bigTipper = function (a){
//     var bill = parseInt(a);
//     console.log(bill + 50);
// }

// 2) Variable declarations are scanned and made undefined

console.log(name);
var name = "sammed";
// Here Output will be undefined


function sayName (){
    var name = "Mr. Sam";
    console.log(name);
}
sayName(); // output => Mr. Sam

console.log(name); // it will print "sammed"

