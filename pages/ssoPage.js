export default class SSOPage {
  constructor(page) {
    this.page = page;

    //Log In buttons
    this.usernameInput = page.locator(
      "//input[@placeholder='User ID / Email' or @placeholder='yours@example.com']"
    ); // -- TBD: update locator after login form sync between dev and qa
    this.passwordInput = page.getByPlaceholder('password'); // -- TBD: update locator after login form sync between dev and qa
    this.loginButton = page.getByRole('button', { name: 'Log In' });
  }
}
