const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://parabank.parasoft.com/parabank",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
    reporter: "mochawesome",
    reporterOptions: {
      overwrite: true,
      html: true,
      json: true,
      embeddedScreenshots: true,
      inlineAssets: true,
      saveJson: true,
      videoOnFailOnly: false,
      // Do NOT set reportDir here; set it via CLI in your workflow
    },
    video: true,
  }
});