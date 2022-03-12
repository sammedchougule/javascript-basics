//Operator Precedence (typeof)
// D = (L - S)/L * 100

var sellingPrice = 199;
var listingPrice = 799;

var discoutPrice = ((listingPrice - sellingPrice) / listingPrice) * 100;

displayDiscountPrice = Math.round(discoutPrice)

console.log(displayDiscountPrice + "% Off");

var result = listingPrice > discoutPrice;
// Type of variable
console.log(typeof result);