export default class LoginPageEbooksPlus {
  constructor(page) {
    this.page = page;

    //Page header
    this.heading = page.getByRole('heading', {
      name: 'Welcome to eBooks+'
    });

    //Log In buttons
    /* const loginButtonXpath = "//button[contains(text(), 'Log In')]";
    this.headerLoginButton = page.locator(`//nav[@class='header-navigation']${loginButtonXpath}`);
    this.mainLoginButton = page.locator(`${loginButtonXpath}`);
    this.footerLoginButton = page.locator(`//div[@class='footer-buttons']${loginButtonXpath}`); */

    /* const loginButtons = page.locator('button', {name: 'Log In'});
    this.headerLoginButton = loginButtons.nth(0)
    this.mainLoginButton = loginButtons.nth(1)
    this.footerLoginButton = loginButtons.nth(2) */

    const loginButton = page.getByTestId('login-btn')
    const loginButtonGroup = page.locator('.login-button-group')
    const headerNav = page.getByTestId('header-navigation')
    const footerNav = page.locator('.footer-buttons')

    /* this.headerLoginButton = loginButton.first()
    this.mainLoginButton = loginButton.nth(1)
    this.footerLoginButton = loginButton.last() */

    this.headerLoginButton = headerNav.locator(loginButton)
    this.mainLoginButton = loginButtonGroup.first().locator(loginButton)
    this.footerLoginButton = footerNav.locator(loginButton)
  }
}
