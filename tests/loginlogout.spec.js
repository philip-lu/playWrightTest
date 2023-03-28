import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import LibraryPage from '../pages/libraryPage';
import { ENV } from '../envconfigs/envs';

test('loginlogout @smoke', async ({ page }) => {
  const loginPage = new LoginPage(page);
  //console.log(process.env.BASE_URL)
  await page.goto('/');
  await expect(loginPage.heading).toBeVisible();
  await page.locator('#onetrust-accept-btn-handler').click();
  await page.getByRole('button', { name: 'Log In' }).first().click();
  await page.getByPlaceholder('yours@example.com').click();
  await page.getByPlaceholder('yours@example.com').fill(ENV.USERNAME);
  await page.getByPlaceholder('your password').click();
  await page.getByPlaceholder('your password').fill(ENV.PASSWORD);
  await page.getByRole('button', { name: 'Log In' }).click();

  const libraryPage = new LibraryPage(page);
  await expect(libraryPage.heading).toBeVisible();
  await page.getByTestId('logout-btn').click();

  // ---------------------
  await expect(loginPage.heading).toBeVisible();

  //await context.close();
  //await browser.close();
});
