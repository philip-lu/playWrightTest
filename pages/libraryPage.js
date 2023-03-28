exports.LibraryPage = class LibraryPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole("heading", {
      name: "Welcome to your content library",
    });
  }
};
