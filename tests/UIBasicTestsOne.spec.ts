import { expect, Locator, test } from "@playwright/test";

// Apply custom config ONLY to tests in this file
test.use({
  testIdAttribute: "data-qa", // Now getByTestId() will use data-qa
});

const userForTesting = {
  userName: "martinmarkov@gmail.com",
  password: "408812",
};

// Automate login form
test('Login and verify "Blue Top" product is present', async ({ page }) => {
  await page.goto("https://www.automationexercise.com/login");

  // Cookies consent button
  const _cookiesAgreeBtn: Locator = page.getByRole("button", {
    name: "Consent",
  });

  // Login form elements
  const _userName: Locator = page.getByTestId("login-email");
  const _password: Locator = page.getByTestId("login-password");
  const _loginBtn: Locator = page.getByTestId("login-button");
  const _errorMessage: Locator = page.getByText(
    "Your email or password is incorrect!",
    { exact: true }
  );
  const _getSingleProductName = (productName: string): Locator => {
    return page
      .locator(".features_items .single-products")
      .filter({ hasText: productName });
  };

  // Test action
  await _cookiesAgreeBtn
    .click({ timeout: 8000 })
    .catch(() =>
      console.log("Consent banner not present – continuing (common in CI)")
    );
  await _userName.fill(userForTesting.userName);
  await _password.fill(userForTesting.password);
  await _loginBtn.click();
  await expect(_getSingleProductName("Blue Top")).toBeVisible();

  const sp = page.locator(".features_items .productinfo p");
  let allProductsNames = await sp.allTextContents();
  console.log(12345);
  console.log(allProductsNames);
  // await page.locator('your locator').waitFor()
  // await page.locator('your locator').first().waitFor();
  // await page.locator('your locator').last().waitFor();
});
