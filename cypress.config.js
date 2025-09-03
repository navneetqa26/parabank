const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://parabank.parasoft.com/parabank",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
    reporter: "cypress-mochawesome-reporter",   // ✅ must use this, not plain mochawesome
    reporterOptions: {
      reportDir: "cypress/reports/json",
      overwrite: false,
      html: false,
      json: true,
      saveAllAttempts: false,
    },
    video: true,
  },
});
