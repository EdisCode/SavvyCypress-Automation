const { defineConfig } = require("cypress");

const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/integration/**/*.{js,jsx,ts,tsx,feature}",
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
  // reporter: "mochawesome",
  // reporterOptions: {
  //   reportFilename: "[status]_[datetime]-[name]-report",
  //   timestamp: "longDate",
  // },
});
