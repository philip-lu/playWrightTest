import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import SSOPage from '../pages/ssoPage';
import LibraryPage from '../pages/libraryPage';
import AcceptCookiesBanner from '../commonElements/acceptCookiesBanner';
import { ENV } from '../envconfigs/envs';

test('loginlogout @uismoke', async ({ page }) => {
  /* const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage(); */

  /* console.log(process.env.BASE_URL);
  console.log("USERNAME is " + ENV.USERNAME); 
  console.log("PASSWORD is " + ENV.PASSWORD);  */

  //console.log(await context.cookies());
  //await context.clearCookies();

  // User goes to the base url
  await page.goto('/');

  // Login Page opens
  const loginPage = new LoginPage(page);
  await expect(loginPage.heading).toBeVisible();

  // User accepts the cookies and clicks Log In button
  const acceptCookiesBanner = new AcceptCookiesBanner(page);
  await acceptCookiesBanner.acceptAllButton.click();
  await loginPage.mainLoginButton.click();

  // User logs in
  const ssoPage = new SSOPage(page);
  await ssoPage.usernameInput.fill(ENV.USERNAME);
  await ssoPage.passwordInput.fill(ENV.PASSWORD);
  await ssoPage.loginButton.click();

  // Library page opens
  const libraryPage = new LibraryPage(page);
  await expect(libraryPage.heading).toBeVisible();

  // The empty library message is displayed
  await expect(libraryPage.emptyLibraryMessage).toBeVisible();

  // User clicks Log Out button
  await libraryPage.logoutButton.click();

  // Log In page opens
  await expect(loginPage.heading).toBeVisible();

  // ---------------------
  // await context.close();
  // await browser.close();
});
