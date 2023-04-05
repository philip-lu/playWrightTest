export default class LoginPageEspAdmin {
  constructor(page) {
    this.page = page;
    this.mainFrame = page.getByTestId('login-page');
    this.loginButton = page.locator('#login-btn');
  }
}
