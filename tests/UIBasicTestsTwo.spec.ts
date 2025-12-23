import { Locator, test } from "@playwright/test";


test('Selecting element from static drop down', async ({ page }) => {
    const loginUrl = 'https://rahulshettyacademy.com/loginpagePractise/';
    const dropDown = page.getByRole('combobox');
    
    await page.goto(loginUrl);

    // Select dropdown
    await dropDown.selectOption('Consultant');
    await page.pause();
})