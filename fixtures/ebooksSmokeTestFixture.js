import { base } from '@playwright/test';
import { LoginPageEbooks } from '@pages/ebooks/loginPage';
import { AcceptCookiesBanner } from '@uimodules/acceptCookiesBanner';
import { SsoPage } from '@pages/common/ssoPage';
import { LibraryPage } from '@pages/ebooks/libraryPage';

export default test = base.test.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPageEbooks(page);
    await use(loginPage);
  },
  acceptCookiesBanner: async ({ page }, use) => {
    const acceptCookiesBanner = new AcceptCookiesBanner(page);
    await use(acceptCookiesBanner);
  },
  ssoPage: async ({ page }, use) => {
    const ssoPage = new SsoPage(page);
    await use(ssoPage);
  },
  libraryPage: async ({ page }, use) => {
    const libraryPage = new LibraryPage(page);
    await use(libraryPage);
  }
});

export const expect = base.expect;
