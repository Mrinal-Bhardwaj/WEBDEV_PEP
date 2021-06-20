const fs = require("fs");

let pendingpromise = fs.promises.readFile("./f1.txt");

pendingpromise.then(function(){
    // console.log(pendingpromise);
    console.log("Inside SCB");
})

pendingpromise.catch(function () {
    console.log("Inside FCB");
})