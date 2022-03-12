//Allow user to access course if he is:
//logged in from email
//logged in from Google
//logged in from facebook

var email = true;
var facebook = false;
var google = false;

// || (OR) any one condition should be true
if (email || facebook || google){
    console.log("Login Success");
}