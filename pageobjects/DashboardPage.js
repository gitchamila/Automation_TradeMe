const { expect } = require("@playwright/test");

class DashboardPage {

    constructor(page) {

        this.page = page;
        this.dashboardMainLogo = page.getByLabel('navigation bar').getByRole('link', { name: 'Trade Me', exact: true });

    }

    async clickLogo() {
        await this.dashboardMainLogo.click();
        await this.page.waitForLoadState('load');
        //await this.page.pause();

    }

}
module.exports = { DashboardPage };