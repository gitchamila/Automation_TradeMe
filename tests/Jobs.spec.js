const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');


test('Jobs find', async ({ page }) => {
    const poManager = new POManager(page);
    const jobsPage = poManager.getJobsPage();

    await jobsPage.clickJobButton()

    
});
