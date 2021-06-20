// High order functions
// Those functions which accepts functions as a parameter

// Callback Functions
// Functions which are passed as a argument in a high order functions

function getfirstname(fullname){
    fullname = fullname.split(" ");
    return fullname[0];
}
function getlastname(fullname){
    fullname = fullname.split(" ");
    return fullname[1];
}
function callme(fullname,fun){
    let name = fun(fullname);
    console.log(name);
}

callme("Steve Rogers",getfirstname);
callme("Tony Stark",getlastname);