import { Locator, test } from "@playwright/test";


test('Selecting element from static drop down', async ({ page }) => {
    const loginUrl = 'https://rahulshettyacademy.com/loginpagePractise/';
    
    await page.goto(loginUrl);

    // Select dropdown
    const dropDown = page.getByRole('combobox');
    await dropDown.selectOption('Consultant');
    
    // Check boxes
    const checkboxUser = page.locator('.checkmark');
    const okayBtn = page.getByRole('button', { name: 'Okay'});
    await checkboxUser.last().click();
    await await okayBtn.click();
})