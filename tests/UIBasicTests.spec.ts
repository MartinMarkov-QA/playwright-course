import { test } from "@playwright/test";


test('First Playwright test', async ({page}) => {
    await page.goto('https://google.com');
})