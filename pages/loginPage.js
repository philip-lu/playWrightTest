export default class LoginPageEbooksPlus {
  constructor(page) {
    this.page = page;

    //Page header
    this.heading = page.getByRole('heading', {
      name: 'Welcome to eBooks+'
    });

    const loginButton = page.getByTestId('login-btn')
    const loginButtonGroup = page.locator('.login-button-group')
    const headerNav = page.getByTestId('header-navigation')
    const footerNav = page.locator('.footer-buttons')

    this.headerLoginButton = headerNav.locator(loginButton)
    this.mainLoginButton = loginButtonGroup.first().locator(loginButton)
    this.footerLoginButton = footerNav.locator(loginButton)
  }
}
