exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    //this.url = 'https://qa-ebooks.health.elsevier.com/login'
    this.heading = page.getByRole("heading", {
      name: "Welcome to eBooks+",
    });
  }
};
