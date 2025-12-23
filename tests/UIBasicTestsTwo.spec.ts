import { Locator, test } from "@playwright/test";


test('Selecting element from static drop down', async ({ page }) => {
    const loginUrl = 'https://rahulshettyacademy.com/loginpagePractise/';
    const selectDropDown = page.getByRole('combobox');
    
    await page.goto(loginUrl);
    await selectDropDown.selectOption('Consultant');
})