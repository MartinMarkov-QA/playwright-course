import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config = defineConfig({
  testDir: './tests',
  timeout: 40 * 1000,
  use: {

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */

  }
});
module.exports = config;
