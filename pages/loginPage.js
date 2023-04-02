export default class LoginPage {
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

    this.headerLoginButton = page.getByTestId('header-navigation').getByTestId('login-btn')
    this.mainLoginButton = page.locator("//div[@class='login-button-group']").getByTestId('login-btn').first()
    this.footerLoginButton = page.locator("//div[@class='login-button-group']").getByTestId('login-btn').last()
  }
}
