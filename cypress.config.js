const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://phptravels.net',
    defaultCommandTimeout: 90000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
