export default class LibraryPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', {
      name: 'Welcome to your content library',
      exact: true
    });
    this.logoutButton = page.getByTestId('logout-btn');
    this.emptyLibraryMessage = page.getByTestId('entitlement-list-empty');
  }
};
