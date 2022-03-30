const { devices } = require('@playwright/test');
const { devices: replayDevices } = require('@replayio/playwright');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
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
    {
      name: 'replay-chromium',
      use: { ...replayDevices['Replay Chrome'] }
    },
    {
      name: 'replay-firefox',
      use: { ...replayDevices['Replay Firefox'] }
    }
  ],
  reporter: 'list',
  webServer: {
    command: 'npm run test:serve',
    port: 9999,
    reuseExistingServer: false
  }
};

module.exports = config;
