export default class LoginPage {
  constructor(page) {
    this.page = page;

    //Page header
    this.heading = page.getByRole('heading', {
      name: 'Welcome to eBooks+'
    });

    //Log In buttons
    const loginButtonXpath = '';
    this.headerLoginButton = page.locator("//header//button[contains(text(),'Log in')]");
    this.mainLoginButton = page.locator("//button[@data-testid='login-btn']").first();
    this.footerLoginButton = page.locator(
      "//div[@class='footer-buttons']//button[@data-testid='login-btn']"
    );
  }
}
