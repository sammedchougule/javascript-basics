//Operators +, -, *, / and %

// var num1 = 7;
// var num2 = 9;

// console.log(num1 + num2);

// var answer = num1 > num2;

// console.log(answer);

//Getting Discount Price of course on website
// D = (L - S)/L * 100

var sellingPrice = 199;
var listingPrice = 799;

var discoutPrice = ((listingPrice - sellingPrice) / listingPrice) * 100;

displayDiscountPrice = Math.round(discoutPrice)

console.log(displayDiscountPrice + "% Off");
