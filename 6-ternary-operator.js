// Show user a signout if he is authenticated,
// otherwise show him option to login/signup

var authenticated = true;

// if(authenticated) {
//     console.log("Show signout button");
// } else {
//     console.log("Show login option");
// }

//Ternary Operator
authenticated ? console.log("Signout button") : console.log("Login button");