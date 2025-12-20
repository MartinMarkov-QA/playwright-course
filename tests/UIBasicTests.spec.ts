import { expect, Locator, test } from "@playwright/test";

// Apply custom config ONLY to tests in this file
test.use({
  testIdAttribute: 'data-qa',  // Now getByTestId() will use data-qa
});

// Browser Context test
test('Browser Context Playwright test', async ({browser}) => {
    // New browser instance where you can pass all the settings like cookies etc
    const browserContext = await browser.newContext();

    // New Page or Tab instance
    const pageInstance = await browserContext.newPage(); 
    await pageInstance.goto('https://playwright.dev/');
    console.log(await pageInstance.title());
    
});

// Automate login form
test('Page Context Playwright test', async ({page, context}) => {

    await page.goto('https://www.automationexercise.com/login');

    // Login form elements
    const _cookies: Locator = page.getByRole('button', {name: 'Consent'});
    const _userName: Locator = page.getByTestId('login-email');
    const _password: Locator = page.getByTestId('login-password');
    const _loginBtn: Locator = page.getByTestId('login-button');

    // Test action
    await _cookies.click();
    await _userName.fill('test@test.com');
    await _password.fill('1234');
    await _loginBtn.click();

});
