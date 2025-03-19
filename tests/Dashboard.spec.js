const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');

test('Dashboard Page', async ({ page }) => {

    const poManager = new POManager(page);
    const dashboardPage = poManager.getDashboardPage();

    await dashboardPage.clickLogo();
   
   
    

    //await page.pause();


});