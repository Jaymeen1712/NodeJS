const puppeteer = require("puppeteer");

async function run() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto("https://commons.wikimedia.org/wiki/Special:WhatLinksHere/Main_Page/");

  // await page.screenshot({ path: "example.png", fullPage: true });

  const tutorials = await page.$$eval("#firstHeading", (elements) => {
    return elements.map(element => element.innerText);
  });
  console.log("🚀 ~ file: index.js:12 ~ tutorials ~ tutorials:", tutorials)
 
  await browser.close();
}

run();
