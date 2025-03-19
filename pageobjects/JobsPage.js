const { expect } = require("@playwright/test");

class JobsPage {

    constructor(page) {

        this.page = page;
        this.jobsButton = page.getByLabel('Search and Verticals').getByRole('link', { name: 'Jobs' });
        this.searchJobsBtn = page.getByRole('button', { name: 'Search jobs' });
    }


    async clickJobButton() {

        await expect(this.jobsButton).toBeVisible();
        await this.jobsButton.click();
        await expect(this.page.locator('tm-jobs-home-page-header-banner')).toContainText('Find your next job in New Zealand');
    }

    async searchJobs() {
        await this.page.getByRole('button', { name: 'All categories' }).click();
        await this.page.locator('div:nth-child(15) > .tm-multi-category-refiner__label > .o-rack-item > .o-rack-item__body > .o-rack-item__main > .o-rack-item__primary > .o-rack-item__primary-body').click();
        await this.page.locator('tg-rack-item-primary').filter({ hasText: 'Testing' }).locator('div').click();
        await this.page.getByRole('button', { name: 'Done' }).click();
        await this.page.getByRole('button', { name: 'All New Zealand' }).click();
        await this.page.getByLabel('Region (optional)').selectOption('2: 1');
        await this.page.locator('tm-jobs-location-search-dropdown label').filter({ hasText: 'All Districts' }).click();
        await this.page.getByRole('img', { name: 'Jobs homepage banner' }).click();
        

    }

    async clickSearchJobsBtn(){
        await this.searchJobsBtn.click();
    }
}

module.exports = { JobsPage };