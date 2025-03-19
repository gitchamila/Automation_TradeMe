const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');
const testdata = JSON.parse(JSON.stringify(require('../utils/TestData/Credentials.json')));


test.only('Trademe login', async ({ page }) => {

    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    const dashboardPage = poManager.getDashboardPage();
    const jobsPage = poManager.getJobsPage();



    await loginPage.goTo();
    await loginPage.validLogin(testdata.email, testdata.password);
    await loginPage.verifyLogin();

    await dashboardPage.clickLogo();

    await jobsPage.clickJobButton();
    await jobsPage.searchJobs();
    await jobsPage.clickSearchJobsBtn();

    await dashboardPage.clickLogo();

    await page.pause();


});

