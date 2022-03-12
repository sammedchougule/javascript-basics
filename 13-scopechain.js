// Grandfather 
// Father ^
// Child/Grandson ^^

// In this child can ask Icecreame to father and also Grandson
// Father Can ask Icecreame to Grandfather but not to Child
// Overall the smaller guy can ask his icecream to elder but not his younger ones.

var name = "Sam";

console.log("Line Number 11", name);

function sayName() {
    var name = "Mr. S";
    console.log("Line number 15", name);
        function sayName1() {
            var name = "Mr. A";
            console.log("Line number 18", name);  
        }
sayName1();
}


sayName();
