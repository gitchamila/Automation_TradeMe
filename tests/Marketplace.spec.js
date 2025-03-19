const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');


test('Find Products', async ({ page }) => {
    const poManager = new POManager(page);
    const marketplacePage = poManager.getMarketplacePage();

    await marketplacePage.clickMarketplaceButton();
    await marketplacePage.searchProducts();

    
});