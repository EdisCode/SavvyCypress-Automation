const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "cypress/cucumberReports",
  reportPath: "cypress/cucumberReports/cucumber-htmlreport.html",
  metadata: {
    browser: {
      name: "Chrome",
      version: "119.0.6045.106 (64-bit)",
    },
    device: "Local test machine",
    platform: {
      name: "Windows 11",
      version: "22H2 (OS Build 22621.2506)",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Cypress Report" },
      { label: "Execution Time", value: new Date().toDateString() },
    ],
  },
});
