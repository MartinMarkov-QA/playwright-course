import { expect, Locator, test } from "@playwright/test";

test.describe("Login and find a specific product and click add to basket", () => {
  test("E2E test login > find product > add product > ", async ({ page }) => {

    await test.step("Navigate to login page and assert the login form", async () => {
      const loginUrl: string = "https://www.automationexercise.com/login";
      const _cookiesAgreeBtn: Locator = page.getByRole("button", {
        name: "Consent",
      });
      const _loginForm: Locator = page.locator(".login-form");

      await page.goto(loginUrl);
      await _cookiesAgreeBtn
        .click({ timeout: 3000 })
        .catch(() =>
          console.log("Consent banner not present – continuing (common in CI)")
        );
      await expect(_loginForm).toBeVisible();
    });
  });
});
