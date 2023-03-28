export default class LoginPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', {
      name: 'Welcome to eBooks+'
    });
  }
}
