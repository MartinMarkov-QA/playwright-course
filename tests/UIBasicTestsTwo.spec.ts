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

test('Two page interaction', async({ browser }) => {
    // Creating new browser context where you can pass browser settings like cookies etc
    const context = await browser.newContext();
    
    // Creating new page/tab out of the new browser context
    const pageOne = await context.newPage();

    pageOne.goto('https://rahulshettyacademy.com/loginpagePractise/');

    // Create new page/tab listener before the actual click event
    const pagePromise = context.waitForEvent('page');

    // Click the link that opens the new page/tab
    await pageOne.getByRole('link', { name: 'Free Access to InterviewQues/ResumeAssistance/Material' }).click();

    // Create the new/second page instance
    const pageTwo = await pagePromise;

    // Second page locator
    const pageTwoDataLocator: Locator = pageTwo.getByText('Please email us at mentor@rahulshettyacademy.com with below template to receive response', { exact: true });

    // Wait to make sure the data is stored properly
    await pageTwoDataLocator.waitFor();
    const pageTwoData = await pageTwoDataLocator.textContent();

    // Getting the need it user name or defaulting to 'default-username'
    const pageTwoDataUserName = pageTwoData?.split('@')[1].split(' ')[0] ?? 'default-username';

    // Populating the username data from page two to page one
    await pageOne.getByRole('textbox', { name: 'Username:' }).fill(pageTwoDataUserName);
})
