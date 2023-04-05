import { test as base, expect } from '@playwright/test';
import LoginPageEbooksPlus from '../pages/loginPage';

export default test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPageEbooksPlus(page));
  }
});

export const expect = test.expect;
