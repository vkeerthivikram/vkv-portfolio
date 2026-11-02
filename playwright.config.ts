import { defineConfig, devices } from "@playwright/test";

const externalBaseURL = process.env.PORTFOLIO_BASE_URL;
const baseURL = externalBaseURL || "http://127.0.0.1:5173";
// Use the installed browser on the Windows workspace; CI uses Playwright's
// Chromium. PLAYWRIGHT_CHANNEL can override this without changing the suite.
const channel =
  process.env.PLAYWRIGHT_CHANNEL ||
  (process.platform === "win32" ? "chrome" : undefined);

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : 3,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "desktop-chromium",
      use: {
        ...devices["Desktop Chrome"],
        channel,
        viewport: { width: 1536, height: 1000 },
      },
    },
    {
      name: "mobile-chromium",
      use: {
        ...devices["iPhone 13"],
        browserName: "chromium",
        channel,
        viewport: { width: 390, height: 844 },
        defaultBrowserType: "chromium",
      },
    },
  ],
  webServer: externalBaseURL
    ? undefined
    : {
        command: "npm run preview -- --port 5173 --strictPort",
        url: baseURL,
        reuseExistingServer: !process.env.CI,
        timeout: 120_000,
      },
});
