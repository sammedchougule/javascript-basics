// Create an application with following roles:
// admin - gets full access
// subadmin - gets accesss to create/delete course
// testprep - gets access to create/delete tests
// user - gets access to cosume content

var user = "rm";

switch (user) {
    case "admin":
     console.log("You get full access");
     break;
    case "subadmin":
     console.log("gets accesss to create/delete course");
     break;
    case "testprep":
     console.log("gets access to create/delete tests");
     break;
    case "user":
     console.log("gets access to cosume content");
     break;

    default:
        console.log("Trial User");
        break;
}