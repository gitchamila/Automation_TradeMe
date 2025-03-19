const { expect } = require("@playwright/test");

class LoginPage {

    constructor(page) {

        this.page = page;
        // this.userName = page.locator("#userEmail");
        // this.password = page.locator("#userPassword");
        // this.loginButton = page.locator("[value='Login']");
        //this.loginLabel = page.locator("(//a[@class='logged-out__log-in'][normalize-space()='Log in'])[1]")
        this.loginLabel = page.getByRole('link', { name: 'Log in' }).first();
        this.inputEmail = page.getByRole('dialog').locator('iframe').contentFrame().getByRole('textbox', { name: 'Email' });
        this.inputPassword = page.getByRole('dialog').locator('iframe').contentFrame().getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('dialog').locator('iframe').contentFrame().getByRole('button', { name: 'Log in' });
        this.profileIcon = page.locator("[classiclink*='MyTradeMe']").first();
        //this.profileIcon = page.getByRole('link', { name: 'My Trade Me C' });
        this.emailLable = page.locator(".tm-my-trade-me-profile__email-word-break");
        //this.emailLableLocation = page.locator("o-rack-item__body h-text-align-right").first();

        this.logOut = page.locator("[classiclink*='MyTradeMe']").first();

    }

    async goTo() {
        await this.page.goto("https://www.trademe.co.nz/a/");
        //await this.page.waitForTimeout(5000);
        await this.page.waitForLoadState('load');

    }
    async validLogin(email, password) {
        await this.loginLabel.click();
        await this.page.waitForLoadState('networkidle'); 
        /////////////////

        await this.inputEmail.waitFor({ state: 'visible' });
        await this.inputEmail.focus();
        await this.inputEmail.fill("");  // Clear the field first
        await this.inputEmail.type(email, { delay: 100 }); // Add delay to simulate human typing

        await this.inputPassword.waitFor({ state: 'visible' });
        await this.inputPassword.focus();
        await this.inputPassword.fill("");
        await this.inputPassword.type(password, { delay: 100 });

        //await this.inputEmail.type(email);
        //await this.inputPassword.type(password);
        await this.loginButton.click();

        await this.page.waitForLoadState('networkidle'); 


        await this.page.waitForTimeout(3000);
        await expect(this.page.getByRole('link', { name: 'Log out' }).first()).toBeVisible();

    }

    async verifyLogin() {
        await this.profileIcon.click();
        await expect(this.page.getByText('Email chamilalook@gmail.com')).toBeVisible();

    }

}
module.exports = { LoginPage };
