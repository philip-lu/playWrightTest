const base = require('@playwright/test');
const { LoginPageEbooks } = require('@pages/ebooks/loginPage');
const { AcceptCookiesBanner } = require('@uimodules/acceptCookiesBanner');
const { SsoPage } = require('@pages/common/ssoPage');
const { LibraryPage } = require('@pages/ebooks/libraryPage');

exports.test = base.test.extend({
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

exports.expect = base.expect;
