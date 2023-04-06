import { test, expect } from '@playwright/test';
import { URL } from '@constants/url';
import { USERS } from '@constants/users';
import SSOPage from '@pages/common/ssoPage';
import LoginPageEbooks from '@pages/ebooks/loginPage';
import LibraryPage from '@pages/ebooks/libraryPage';
import AcceptCookiesBanner from '@uimodules/acceptCookiesBanner';
import { allure } from 'allure-playwright';

test('OH-57: Successfully submit the Log In form on the SSO Auth0 @uismoke @allure @nrt', async ({ page }) => {
  allure.label('OH-57', 'Successfully submit the Log In form on the SSO Auth0');
  allure.suite('NRT 04/06/2023');

  // User goes to the base url
  await page.goto(URL.ebooks);

  // Login Page opens
  const loginPage = new LoginPageEbooks(page);
  await expect(loginPage.heading).toBeVisible();

  // User accepts the cookies and clicks Log In button
  const acceptCookiesBanner = new AcceptCookiesBanner(page);
  await acceptCookiesBanner.acceptAllButton.click();
  await loginPage.mainLoginButton.click();

  // User logs in
  const ssoPage = new SSOPage(page);
  await ssoPage.logIn(USERS.EBOOKSUSERNAME_1, USERS.EBOOKSPASSWORD_1);

  // Library page opens
  const libraryPage = new LibraryPage(page);
  await expect(libraryPage.heading).toBeVisible();

  // The empty library message is displayed
  await expect(libraryPage.emptyLibraryMessage).toBeVisible();

  // User clicks Log Out button
  await libraryPage.logoutButton.click();

  // Log In page opens
  await expect(loginPage.heading).toBeVisible();
});

test('Failed @allure', async () => {
  const x = 2;
  expect(x).toBeLessThanOrEqual(1);
});

test('Pass @allure', async () => {
  const x = 2;
  expect(x).toBeLessThanOrEqual(2);
});
