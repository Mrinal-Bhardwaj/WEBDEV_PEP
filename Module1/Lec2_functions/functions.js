//  Functions in javasccript

function callme(){
    console.log("Call me function called");
}

callme(); //Will print the value inside call me function
console.log(callme); // Will print function address
console.log(callme()); // Function will be called and print "Call me function called" and also will give undefined 
// because function call me is not returning any value

function callme1(){
    console.log("Call me function called");
    return 10;
}
// console.log(callme1());
let rval = callme1();
console.log(callme1());

function callme2(name){
    console.log(name);
}
callme2("steve");

let sayhi = function(){
    console.log("Functions say hi !!");
}
