import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import LibraryPage from '../pages/libraryPage';
import { ENV } from '../envconfigs/envs';

test('loginlogout @smoke', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('/');
  await expect(loginPage.heading).toBeVisible();

  await page.locator('#onetrust-accept-btn-handler').click();
  await page.getByRole('button', {name: 'Log In'}).first().click();
  await page.getByPlaceholder('User ID / Email').fill(ENV.USERNAME);
  await page.getByPlaceholder('Password').fill(ENV.PASSWORD);
  await page.getByRole('button', {name: 'Log In'}).click();

  //await page.waitForSelector('h1');

  const libraryPage = new LibraryPage(page);
  await expect(libraryPage.heading).toBeVisible();
  //await page.getByTestId('logout-btn').click();

  // ---------------------
  //await expect(loginPage.heading).toBeVisible();
});
