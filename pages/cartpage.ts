import { Page, expect} from "@playwright/test";

/**
 * Represents the shopping cart page and provides methods to navigate
 * to the cart, select products, and proceed to the payment page.
 */

export class CartPage {
    private page: Page

    constructor(page: Page) {
        this.page = page
    }

    /**
     * Navigate to Add to cart page
     */
    async navigateToCart(cartURL: string){
        await this.page.goto(cartURL)
        await expect(this.page.locator('.cart')).toBeVisible();

    }

    /**
     * use the product name and click on corresponding but now button.
     */

    async buyNow(productName: string) {
        const product = this.page.locator('.infoWrap').
            filter({ hasText: productName });


        // click buy now button
        await product.getByRole('button', { name: 'Buy Now❯' }).click();

        // assert that you are on the payments page
        await expect(this.page.getByText('Payment Method', {exact: true})).toBeVisible();


    }

}