const { When, Then, Given } = require('@cucumber/cucumber')
const { test, expect, playwright } = require('@playwright/test')


Given('Loing to TreadMe Ecommerce application with {un} and {pw}', async function (username, password) {
    // Write code here that turns the phrase above into concrete actions
    const browser = playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newpage(page);

    page.goto("https://rahulshettyacademy.com/client/");




});

// When('Enter valied credintilas', function () {
//     // Write code here that turns the phrase above into concrete actions
//     return 'pending';
// });

// Then('Verify user can loging to the application', function () {
//     // Write code here that turns the phrase above into concrete actions
//     return 'pending';
// });
