export default class AcceptCookiesBanner {
  constructor(page) {
    this.page = page;
    this.acceptAllButton = page.locator('#onetrust-accept-btn-handler');
    this.cookiesSettingsButton = page.locator('#onetrust-pc-btn-handler');
  }
}
