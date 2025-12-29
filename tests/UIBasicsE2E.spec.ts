import { expect, Locator, test } from "@playwright/test";

// Apply custom config ONLY to tests in this file
test.use({
  testIdAttribute: "data-qa", // Now getByTestId() will use data-qa
});

test.describe("Login and find a specific product and click add to basket", () => {
  test("E2E test login > find product > add product > assert product > pay", async ({ page }) => {

    await test.step("Navigate to login page login and verify you are on home page", async () => {
      const loginUrl: string = "https://www.automationexercise.com/login";
      const homePageTitle = 'Automation Exercise';
      const userForTesting = {
        userName: "martinmarkov@gmail.com",
        password: "408812",
      };
      const _cookiesAgreeBtn: Locator = page.getByRole("button", {
        name: "Consent",
      });
      const _loginForm: Locator = page.locator(".login-form");
      const _userName: Locator = page.getByTestId("login-email");
      const _password: Locator = page.getByTestId("login-password");
      const _loginBtn = page.getByRole('button', { name: 'Login' });

      await page.goto(loginUrl);
      await _cookiesAgreeBtn
        .click({ timeout: 3000 })
        .catch(() =>
          console.log("Consent banner not present – continuing (common in CI)")
        );
      await expect(_loginForm).toBeVisible();
      await _userName.fill(userForTesting.userName);
      await _password.fill(userForTesting.password);
      await _loginBtn.click();
      expect(page).toHaveTitle(homePageTitle);
    });

    await test.step("Add 'Men Tshirt' product to basket", async () => {
      const _featuresItemsSection: Locator = page.locator('.features_items');
      const _menTshirtProduct: Locator = _featuresItemsSection.locator('.productinfo').filter({ hasText: 'Men Tshirt' });
      const _menTshirtProductBtn: Locator = _menTshirtProduct.locator('.add-to-cart');
      const _productAddedModal: Locator = page.getByRole('heading', { name: 'Added!' });
      const _viewCartModalBtn: Locator = page.getByText('View Cart', { exact: true });
      
      await _menTshirtProductBtn.click();
      await expect(_productAddedModal).toBeVisible();
      await _viewCartModalBtn.click();
    });

    await test.step("Verify the 'Men Tshirt' product is in the basket and proceed to checkout", async () => {
      const _menTshirt: Locator = page.getByRole('link', { name: 'Men Tshirt' });
      const _checkoutBtn: Locator = page.getByText('Proceed To Checkout', { exact: true });
      
      await expect(page).toHaveTitle('Automation Exercise - Checkout');
      await expect(_menTshirt).toBeVisible();
      await _checkoutBtn.click();
    });


  });
});
