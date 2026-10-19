import { test } from '@playwright/test'
import { productData } from '../data/product-data'
import { ProductsPage } from '../pages/ProductsPage'
import { CartPage } from '../pages/cartpage'
import { PaymentsPage } from '../pages/paymentsPage'



/**
 * This test case shows the power of Page Object Model. 
 * This test case covers multiple pages and represent an e2e workflow.
 * All the actions are happening inside pages classes and data is coming from data files and .env
 * Here the test case is only supplying the data to Page Objects and entire business login is abstracted
 * inside the Page classes.
 * 
 */

test('Add to cart and buy now', async ({page}) => {

    const productPage = new ProductsPage(page)
    const cartPage = new CartPage(page)
    const paymentsPage = new PaymentsPage(page)


    //Navigate to products page
    await productPage.navgateToProductspage(productData.appURLs.productPageURL)

    //Add a product to the cart.
    await productPage.addToCart(productData.productToCart)

    //Navigate to the cart page
    await cartPage.navigateToCart(productData.appURLs.cartPageURL)

    //click buy now on the cart page
    await cartPage.buyNow(productData.productToCart)

    // place the order
    await paymentsPage.placeOrder(productData.order_Country)


})


