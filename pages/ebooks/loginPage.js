import SsoPage from '@pages/common/ssoPage';

export default class LoginPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', {
      name: 'Welcome to eBooks+',
      exact: true
    });

    // Log In buttons
    const loginButton = page.getByTestId('login-btn');
    const loginButtonGroup = page.locator('.login-button-group');
    const headerNav = page.getByTestId('header-navigation');
    const footerNav = page.locator('.footer-buttons');
    this.headerLoginButton = headerNav.locator(loginButton);
    this.mainLoginButton = loginButtonGroup.first().locator(loginButton);
    this.footerLoginButton = footerNav.locator(loginButton);
  }

  async logIn(username, password) {
    const ssoPage = new SsoPage(this.page);
    await ssoPage.logIn(username, password);
  }
}
