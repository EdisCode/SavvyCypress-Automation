const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/*.{js,jsx,ts,tsx,feature}",
    compilerOptions: {
      allowJs: true,
      types: ["cypress"],
    },
    include: ["**/*.{js,jsx,ts,tsx,feature}"],
  },
  env: {
    url: "https://rahulshettyacademy.com",
  },
  chromeWebSecurity: false,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 30000,
  responseTimeout: 30000,
  requestTimeout: 30000,
  execTimeout: 30000,
  taskTimeout: 30000,
});
