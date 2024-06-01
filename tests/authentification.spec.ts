import { test, expect } from '@playwright/test';

test.describe('Authentication on the page', () => {

    test('Sign Up', async ({ page }) => {
        await page.goto('https://demo.learnwebdriverio.com/');
        await page.click('xpath=//a[contains(text(), "Sign up")]'); 
        await page.locator('xpath=//input[@placeholder="Username"]').fill('testuser');
        await page.locator('xpath=//input[@placeholder="Email"]').fill('testuser@example.com');
        await page.locator('xpath=//input[@placeholder="Password"]').fill('Test1234');
        await page.locator('xpath=//button[contains(text(),"Sign up")]').click();
 });

    test('Sign In', async ({ page }) => {
        await page.goto('https://demo.learnwebdriverio.com/');
        await page.click('xpath=//a[contains(text(), "Sign in")]'); 
        await page.locator('xpath=//input[@placeholder="Email"]').fill('tpiddubna@gmail.com');
        await page.locator('xpath=//input[@placeholder="Password"]').fill('Flowerish1990!');
        await page.locator('xpath=//button[contains(text(),"Sign in")]').click();
     });
});
