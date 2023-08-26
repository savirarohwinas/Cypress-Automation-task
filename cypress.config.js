const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    baseUrl: "https://kasirdemo.belajarqa.com/login",
    specPattern: "cypress/e2e",
    supportFile: false,
    pageLoadTimeout: 60000,
    defaultCommandTimeout: 5000,
    chromeWebSecurity: false
  },
});
