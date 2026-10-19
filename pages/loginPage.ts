import { Locator, Page } from "@playwright/test";

/**
 * Represents the login page and provides methods to navigate to the login
 * page and authenticate a user using their username and password.
 */

export class LoginPage {
    private page: Page;
    private username: Locator;
    private password: Locator;
    private signIn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = this.page.getByRole('textbox', { name: 'email@example.com' });
        this.password = this.page.getByRole('textbox', { name: 'enter your passsword' });
        this.signIn = this.page.getByRole('button', { name: 'Login' });

    }

    async navigateToLoginPage(baseURL: string) {
        await this.page.goto(baseURL);
    }

    async login(username: string, password: string) {


        await this.username.fill(username);
        await this.password.fill(password);
        await this.signIn.click();

    }

}
