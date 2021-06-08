// top to bottom compile
// left to right

// console.log("Hello World !"); A print statement like System.out.print in java used to print message in the console

// Data types in other languages char , int , double , float , boolean , String ,
// Javascript data types =>
// Number , Boolean , String , undefined , Object(Array , object)

// declaration and initialization of a variable
// ES6 syntax => let and const are declaration methods
// Variable declared are block scoped

// if(true){
//     let a = 10;
// }
// console.log(a); //This will give a message "undefined" because we are printing a out of the block

let a; // it takes undefined
// console.log(a);
a = 100;
if (true) {
    let a = 200;
    // console.log(a);
}
// console.log(a);

// const => block scoped and constant(we cannot update a value set a const further)
const pi = 3.14;
// console.log(pi);

// pi = 200; // TypeError - Assignment to a const variable

let b = "sfnkajsf";
let c = "asjfhiuabf";
let d = true;
let e = 3.4553;
let f = undefined;

// Non Primitive => Objects arrays

// Arrays => dynamic
let movies = ["The winter soldier", "Civil War", 100, ""];
// push adds a value to the last 
// pop deletes a value from the last
// unshift adds a value to the front
// shift deletes a value from the front 
// splice(beginning index,number of value) this funtion returns number of values provide from the given index in a list

// console.log(movies[2]);

movies.pop();
movies.push("ENDGAME");
movies.unshift("THe FIrst Avenger"); // append at the start of the array
// console.log(movies);

movies.splice(2, 1);

// "movies[100] = "find me";" ->  This will add "find me" at the 100 index in the list with empty spaces in between
// the last value in the list and the value added by us at the 100 index

// console.log(movies);

 let moveis = [] // new Array(); declarationn of new empty array;

// Object => key values ka pair
// let avenger = {};  // new Object() declaration; 

// keys are always unique in a list
// Values may or can be duplicate ...

let avenger = {
    "full name": "Steve Rogers",
    place: "Queens",
    skills: [
        "Martial Arts",
        "Taekwondo",
        {
            BestFriend: [
                { name: "Bucky", skills: [] },
                { name: "Natasha", skills: ["Fighting", "asdas", "asfasf"] },
            ],
        },
    ],
    movies: ["The First Avenger", "Winter Soldier"],
    age: 200,
};

// charAt and substring works the same as in java
console.log(avenger.skills[2]["BestFriend"][1].skills[1].substring(2));
console.log(avenger.skills[2]["BestFriend"][1].skills[1].charAt(4));

let temp = {
    "first" : "This is the first value",
    "second" : "This is the second value",
    "third" : ["fourth value","fivth value","sixth value","seventh value"]
};
// console.log(temp.third.splice(0,3));
temp.third.push("ten");
console.log(temp.third.shift());
console.log(temp);
// console.log(temp.third.join()); Used to combine all the value of an array to substring

// dot notation => literal check
// console.log(avenger.place);
// console.log(avenger.movies);

// bracket notation avenger["skills"];

// bracket notation
// let key = "age";

// console.log( avenger[key] );
