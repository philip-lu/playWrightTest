import { test, expect } from "@playwright/test";
import LoginPage from "../pages/loginPage";
import LibraryPage from "../pages/libraryPage";
import ENV from "../envconfigs/envs";

/* import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
    path: path.resolve(__dirname, '../envconfigs', '.env.qa'),
    override: true
}); */

test("loginlogout", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto(ENV.BASE_URL);
  await expect(loginPage.heading).toBeVisible();
  //await expect(page.getByRole('button', {name: 'Log In'}).filter({has: page.getByTestId('login-btn')})).toBeVisible();
  //await expect(page.getByRole('button', {name: 'Sign Up'})).toBeVisible();
  await page.locator("#onetrust-accept-btn-handler").click();
  await page.getByRole("button", { name: "Log In" }).first().click();
  await page.getByPlaceholder("yours@example.com").click();
  await page.getByPlaceholder("yours@example.com").fill(ENV.USERNAME);
  await page.getByPlaceholder("your password").click();
  await page.getByPlaceholder("your password").fill(ENV.PASSWORD);
  await page.getByRole("button", { name: "Log In" }).click();

  const libraryPage = new LibraryPage(page);
  await expect(libraryPage.heading).toBeVisible();
  await page.getByTestId("logout-btn").click();

  // ---------------------
  await expect(loginPage.heading).toBeVisible();

  await context.close();
  //await browser.close();
});
