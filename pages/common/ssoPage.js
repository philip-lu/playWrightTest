export default class SsoPage {
  constructor(page) {
    this.page = page;

    //Log In form
    this.usernameInput = page.locator("//input[@name='username']");
    this.passwordInput = page.locator("//input[@name='password']");
    this.loginButton = page.getByRole('button', { name: 'Log In' });
    this.loginLink = page.locator("a:has(div:text('Log In'))");
  }

  async logIn(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
};
