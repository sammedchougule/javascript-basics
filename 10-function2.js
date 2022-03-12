/*
Define a function that can answer the role of a user,
A user can be an following  roles:
admin - with all access
subadmin - with access to create/delete courses
testprep - with access to create/delete tests
user - consume all content
other - trial user.

Input : getUserRole(name, role)
*/

// function getUserRole (name, role) us can write function as shown below assining to varible
getUserRole = function (name, role) {
    switch (role){
        case "admin":
            return `${name} is admin with all access`;
            break;
        case "subadmin":
            return `${name} is subadmin to create/delete courses`;
            break;
        case "testprep":
            return `${name} is testprep to create/delete tests`;
            break;
        case "testprep":
            return `${name} is user to consume conetent`;
            break;
        default:
            return `${name} is a trial user`;
    }
}

console.log(getUserRole("Sam", "admin"))

var getRole = getUserRole("Vishal");
console.log(getRole);