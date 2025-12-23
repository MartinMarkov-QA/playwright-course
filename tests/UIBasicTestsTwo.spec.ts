import { expect, Locator, test } from "@playwright/test";


test('Selecting element from static drop down', async ({ page }) => {
    const loginUrl = 'https://rahulshettyacademy.com/loginpagePractise/';
    
    await page.goto(loginUrl);

    // Select dropdown
    const dropDown = page.getByRole('combobox');
    await dropDown.selectOption('Consultant');
    await expect(dropDown).toHaveValue('consult');
    
    
    // Check boxes
    const checkboxUser = page.locator('.checkmark');
    const okayBtn = page.getByRole('button', { name: 'Okay'});
    await checkboxUser.last().click();
    await okayBtn.click();
    await expect(checkboxUser.last()).toBeChecked();

    // Link attributes 
    const topLink = page.getByRole('link', { name: 'Free Access to InterviewQues/ResumeAssistance/Material' });
    await expect(topLink).toHaveAttribute('class', 'blinkingText');
})
