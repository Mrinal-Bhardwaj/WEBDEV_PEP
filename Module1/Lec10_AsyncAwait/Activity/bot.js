const fs = require('fs');
const puppeteer = require('puppeteer');
// const cred = require('./credentials.js');
const id = "immickey04";
const pw = "12345678im";
let browser;
let tab;

(async function autolike() {
    try {
        let browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ["--start-maximized"],
        });
        let pages = await browser.pages();
        let tab = pages[0];
        await tab.goto("https://www.instagram.com/accounts/login/");
        // await tab.waitFor(() => document.querySelectorAll('input').length);
        await tab.type(Input[name=username], id);
        await tab.type(Input[name=password], pw);
        await tab.click(".Igw0E.IwRSH.eGOV_._4EzTm");
    }
    catch (err) {
        console.log(err);
    }
})();
// "._2hvTZ.pexuQ.zyHYP"