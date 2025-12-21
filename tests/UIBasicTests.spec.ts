import { expect, Locator, test } from "@playwright/test";

// Apply custom config ONLY to tests in this file
test.use({
  testIdAttribute: 'data-qa',  // Now getByTestId() will use data-qa
});

// Automate login form
test('Assert login form wrong credentials message', async ({page}) => {

    await page.goto('https://www.automationexercise.com/login');

    // Cookies consent button
    const _cookiesAgreeBtn: Locator = page.getByRole('button', {name: 'Consent'});

    // Login form elements
    const _userName: Locator = page.getByTestId('login-email');
    const _password: Locator = page.getByTestId('login-password');
    const _loginBtn: Locator = page.getByTestId('login-button');
    const _errorMessage: Locator = page.getByText('Your email or password is incorrect!', { exact: true });

    // Test action
    await _cookiesAgreeBtn
    .click({ timeout: 8000 })
    .catch(() => console.log('Consent banner not present – continuing (common in CI)'));
    await _userName.fill('test@test.com');
    await _password.fill('1234');
    await _loginBtn.click();
    await expect(_errorMessage).toBeVisible();
    console.log('End of the Test');
});

// Browser Context test
test('Browser Context Playwright test', async ({browser}) => {
    // New browser instance where you can pass all the settings like cookies etc
    const browserContext = await browser.newContext();

    // New Page or Tab instance
    const pageInstance = await browserContext.newPage(); 
    await pageInstance.goto('https://playwright.dev/');    
});
