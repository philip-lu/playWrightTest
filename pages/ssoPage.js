export default class SSOPage {
  constructor(page) {
    this.page = page;

    //Log In buttons
   this.usernameInput = page.locator(
      "//input[@placeholder='User ID / Email' or @placeholder='your username']"
    ); // -- TBD: update locator after login form sync between dev and qa
    
    this.passwordInput = page.getByPlaceholder('password'); // -- TBD: update locator after login form sync between dev and qa
    this.loginButton = page.getByRole('button', { name: 'Log In' });
    this.loginLink = page.locator("a:has(div:text('Log In'))");
  }

  async logIn(username, password) {
    /* await ssoPage.usernameInput.fill(ENV.USERNAME);
  await ssoPage.passwordInput.fill(ENV.PASSWORD); */
  /* await ssoPage.usernameInput.fill(USERS.USERNAME_2);
  await ssoPage.passwordInput.fill(USERS.PASSWORD_2);
  await ssoPage.loginButton.click(); */
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click(); 
  }
}
