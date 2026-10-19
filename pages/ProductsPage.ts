import { Page, expect } from "@playwright/test";

/**
 * Represents the products page and provides methods to navigate to the
 * products page, add a specific product to the cart, and verify that
 * the product has been added successfully.
 */
export class ProductsPage {
    private page: Page

    constructor(page: Page) {
        this.page = page
    }


    /**
     * Navigate to Products page
     */

    async navgateToProductspage(url: string) {
        await this.page.goto(url);
        await expect( this.page.locator('#burgundy:visible')).toBeVisible();
    }

    /**
     * Add the product to cart using the product name.
     * 
     */
    async addToCart(productName: string) {



        // Get the product card matching the text
        const productCard = this.page.locator('.card')
            .filter({ hasText: productName })

        // click the Add to cart button
        await productCard.getByRole('button', { name: 'Add to Cart' }).click();

        //Verify that product is successfully added to the cart.
        await expect(this.page.getByRole('button', { name: 'Cart 1' })).toBeVisible()

    }

}

