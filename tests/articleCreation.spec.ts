import { test, expect } from '@playwright/test';

test.describe('Post an Article', () => {

    test('Create a new article', async ({ page }) => {
        await page.goto('editor');

        await page.fill('input[placeholder="Article Title"]', 'Test Article');
        await page.fill('input[placeholder="What\'s this article about?"]', 'Testing');
        await page.fill('textarea[placeholder="Write your article (in markdown)"]', 'This is a test article.');

        await page.fill('input[placeholder="Enter tags"]', 'test');
        await page.press('input[placeholder="Enter tags"]', 'Enter');
        await page.fill('input[placeholder="Enter tags"]', 'article');
        await page.press('input[placeholder="Enter tags"]', 'Enter');

        await page.click('button:has-text("Publish Article")');

    });

});
