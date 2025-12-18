import { test } from "@playwright/test";


test('First Playwright test', async ({browser}) => {
    // New browser instance where you can pass all the settings like cookies etc
    const browserContext = await browser.newContext();

    // New Page or Tab instance
    const pageInstance = await browserContext.newPage(); 
    await pageInstance.goto('https://google.com');
    const bp = 'breakpoint';
});