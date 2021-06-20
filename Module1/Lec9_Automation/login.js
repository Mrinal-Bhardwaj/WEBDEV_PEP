const puppeteer = require("puppeteer");
const id = "fasen74982@greenkic.com";
const password = "123456";
let tab;

let browserOpenPromise = puppeteer.launch({
    headless:false,
    defaultViewport:null,
    args:["--start-maximized"],
    // executablePath:"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
});

browserOpenPromise.then(function(browserInstance){
    let pagepromise = browserInstance.pages();
    return pagepromise;
})
.then(function(pages){
    let page = pages[0];
    tab = page;
    let gotopromise = page.goto("https://www.hackerrank.com/auth/login");
    return gotopromise;
})
.then(function(){
    // console.log("Goto Successful");
    let idtype = tab.type("#input-1",id);
    return idtype;
})
.then(function(){
    let passtype = tab.type("#input-2",password);
    return passtype;
})
.then(function(){
    let loginpromise = tab.click(".ui-btn.ui-btn-large");
    return loginpromise;
})
.then(function(){
    console.log("Login Successful");
})
.catch(function(err){
    console.log("Inside catch");
    console.log(err);
});