console.log(multiply);
function multiply(a,b){
    return a*b;
}

console.log(add);

function add(a,b){
    return a+b;
}
var x = multiply(10,10);
var y = add(x,20);

console.log(x);
console.log(y);

//  Hoisting => The assignment of undefined value to the variable used before declaration
//  can be used with let but undefined value cannot be accessed due to temporal dead zone