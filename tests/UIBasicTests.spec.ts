import { expect, test } from "@playwright/test";

// Browser Context test
test('Browser Context Playwright test', async ({browser}) => {
    // New browser instance where you can pass all the settings like cookies etc
    const browserContext = await browser.newContext();

    // New Page or Tab instance
    const pageInstance = await browserContext.newPage(); 
    await pageInstance.goto('https://playwright.dev/');
    console.log(await pageInstance.title());
    
});

// Page Context test
test('Page Context Playwright test', async ({page}) => {
    await page.goto('https://google.com');
    console.log(await page.title());
    await expect(page).toHaveTitle('Google');
});
