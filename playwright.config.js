import { defineConfig, devices } from '@playwright/test';

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    [process.env.CI ? 'github' : 'list'],
    [
      'allure-playwright',
      {
        outputFolder: 'allure-results',
        suiteTitle: false
      }
    ],
    [
      'monocart-reporter',
      {
        name: 'My Test Report',
        outputFile: './monocart-results/report.html',
        trend: './monocart-results/report.json'
      }
    ]
  ],
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }
    },

    /* Test against branded browsers. */
    {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' }
    }
  ]
});
