import { test } from "@playwright/test";

// Browser Context test
test('Browser Context Playwright test', async ({browser}) => {
    // New browser instance where you can pass all the settings like cookies etc
    const browserContext = await browser.newContext();

    // New Page or Tab instance
    const pageInstance = await browserContext.newPage(); 
    await pageInstance.goto('https://playwright.dev/');
});

// Page Context test
test('Page Context Playwright test', async ({page}) => {
    await page.goto('https://google.com');
});