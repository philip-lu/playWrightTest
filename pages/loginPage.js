export default class LoginPage {
  constructor(page) {
    this.page = page;

    //Page header
    this.heading = page.getByRole('heading', {
      name: 'Welcome to eBooks+'
    });

    //Log In buttons
    /* const loginButtonXpath = "//button[@data-testid='login-btn']";
    this.headerLoginButton = page.locator("//header//button[contains(text(),'Log in')]");
    this.mainLoginButton = page.locator(`${loginButtonXpath}`).first();
    this.footerLoginButton = page.locator(
      `//div[@class='footer-buttons']//${loginButtonXpath}`
    ); */

    const loginButtons = page.locator('button', {name: 'Log In'});
    this.headerLoginButton = loginButtons.nth(0)
    this.mainLoginButton = loginButtons.nth(1)
    this.footerLoginButton = loginButtons.nth(2)
  }
}
