// USE FS(File System Module)

// This will import fs into variable fs
let fs = require("fs"); 
console.log("start");

// Sync function
let f1data = fs.readFileSync("./f1.txt","utf8");
console.log(f1data);

// Async funtion
fs.readFile("./f1.txt",cb);

function cb(error,data){
    console.log(error);
    console.log(data+"");
}

console.log("end");
// while(true){

// }