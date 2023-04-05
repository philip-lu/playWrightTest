import { test, expect } from '@playwright/test';
import LoginPageEbooksPlus from '../pages/loginPage';
import SSOPage from '../pages/ssoPage';
import LibraryPage from '../pages/libraryPage';
import AcceptCookiesBanner from '../uimodules/acceptCookiesBanner';
import { URL } from '../envconfigs/url';
import { USERS } from '../users/users';
import LoginPageEspAdmin from '../pages/espAdmin/loginPage';

import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager';

async function getAWSSecret() {
  const secret_name = 'admin-qa.studentconsult.es';

  const client = new SecretsManagerClient({
    region: 'eu-west-1',
    credentials: {
      accessKeyId: 'accessKeyId',
      secretAccessKey: 'secretAccessKey',
    }
  });
  let response;
  try {
    response = await client.send(
      new GetSecretValueCommand({
        SecretId: secret_name,
        VersionStage: 'AWSCURRENT' // VersionStage defaults to AWSCURRENT if unspecified
      })
    );
  } catch (error) {
    throw error;
  }
}

test.skip('Get the secret from AWS', async () => {
  const response = await getAWSSecret();
  const secret = JSON.parse(response.SecretString);
  console.log('Response is: ' + response);
  console.log('AWS Secret is: ' + secret);
});

test('Verify that user is able to log in and log out from eBooks+ @uismoke @ebooks', async ({
  page
}) => {
  // User goes to the base url
  await page.goto(URL.ebooks);

  // Login Page opens
  const loginPage = new LoginPageEbooksPlus(page);
  await expect(loginPage.heading).toBeVisible();

  // User accepts the cookies and clicks Log In button
  const acceptCookiesBanner = new AcceptCookiesBanner(page);
  await acceptCookiesBanner.acceptAllButton.click();
  await loginPage.mainLoginButton.click();

  // User logs in
  const ssoPage = new SSOPage(page);
  await ssoPage.logIn(USERS.USERNAME_1, USERS.PASSWORD_1);

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

test('Verify that user is able to log in and log out from ESP-Admin @uismoke @espadmin', async ({
  page
}) => {
  // User goes to the base url
  await page.goto(URL.espAdmin);

  // User clicks login button
  const loginPage = new LoginPageEspAdmin(page);
  await loginPage.loginButton.click();

  // User logs in
  const ssoPage = new SSOPage(page);
  await ssoPage.loginLink.click();
});
