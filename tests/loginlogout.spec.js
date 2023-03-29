import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import LibraryPage from '../pages/libraryPage';
import { ENV } from '../envconfigs/envs';

test('loginlogout @smoke', async ({ page }) => {
  const loginPage = new LoginPage(page);

  console.log(process.env.BASE_URL);
  console.log(ENV.USERNAME); 
  console.log(ENV.PASSWORD); 
  
  await page.goto('/');
  await expect(loginPage.heading).toBeVisible();

  await page.locator('#onetrust-accept-btn-handler').click();
  await page.getByRole('button', {name: 'Log In'}).first().click();
  await page.getByPlaceholder('User ID / Email').fill('fufud@inboxbear.com');
  await page.getByPlaceholder('P').fill(ENV.PASSWORD);
  //await page.screenshot({ path: 'test-results/screenshot.png', fullPage: true });
  await page.getByRole('button', {name: 'Log In'}).click();

  //await page.waitForSelector('h1');

  const libraryPage = new LibraryPage(page);
  await expect(libraryPage.heading).toBeVisible();
  await page.getByTestId('logout-btn').click();

  // ---------------------
  await expect(loginPage.heading).toBeVisible();
});
