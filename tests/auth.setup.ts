import {test as setup, expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { loginData } from '../data/login-data'
import { STORAGE_STATE } from '../playwright.config'



setup('Setup: Login and save storageState', async ({page}) => {

        const loginPage = new LoginPage(page)
        await loginPage.navigateToLoginPage(loginData.urls.baseAppUrl)
        await loginPage.login(process.env.USER_USERNAME!, process.env.USER_PASSWORD!)
        console.log(`this is the storage state location: ${STORAGE_STATE}`)

        // make sure login process is successful and complete
        await expect( page.locator('#burgundy:visible')).toBeVisible();

        //Save the storage state after successful login.
        await page.context().storageState({path: STORAGE_STATE})
        
})