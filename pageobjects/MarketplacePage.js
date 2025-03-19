const { expect } = require("@playwright/test");

class MarketplacePage {

    constructor(page) {
        this.page = page;
        this.marketplaceButton = page.getByLabel('Search and Verticals').getByRole('link', { name: 'Marketplace' });
    }

    async clickMarketplaceButton() {
        await expect(this.marketplaceButton).toBeVisible();
        // await expect(page.getByLabel('Search and Verticals').getByRole('list')).toContainText('Marketplace');
        await expect(this.marketplaceButton).toContainText('Marketplace');
        await this.page.getByLabel(this.marketplaceButton).click();

    }

    async searchProducts() {
        await this.page.getByLabel('Category (optional)').selectOption('7: Object');
        await this.page.getByRole('textbox', { name: 'Search by keyword (optional)' }).click();
        await this.page.getByRole('textbox', { name: 'Search by keyword (optional)' }).fill('hp probook 450');
        await this.page.getByRole('button', { name: 'Search Marketplace' }).click();
    }

}

module.exports = { MarketplacePage };