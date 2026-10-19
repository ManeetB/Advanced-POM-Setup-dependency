import { Page, expect } from "@playwright/test";

/**
 * Represents the payments page and provides methods to select a country,
 * complete the checkout process, and verify successful order placement.
 */
export class PaymentsPage {
    private page: Page

    constructor(page: Page) {
        this.page = page
    }

    /**
     * This method is to fill the payments details and place order.
     */

    async placeOrder(country: string) {

        //wait for page contents to load.
        await expect(this.page.getByText("Personal Information ")).toBeVisible()


        // Lets select the country
        const countryField = this.page.getByPlaceholder('Select Country')
        await expect(countryField).toBeVisible()
        await countryField.pressSequentially(country, {delay: 300})


        const dropdown = this.page.locator('.ta-results')
        await expect(dropdown).toBeVisible()

        await dropdown.locator('button')
            .filter({ has: this.page.getByText(country) })
            .click()


        // click the place order button
        await this.page.getByText('PLACE ORDER').click();


        await expect(this.page.getByText("Thankyou for the order.")).toBeVisible();

    }

}