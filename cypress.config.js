const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

module.exports = defineConfig({
  viewportWidth: 1200,
  watchForFileChanges: false,
  e2e: {
    setupNodeEvents,
    baseUrl: "http://localhost:8080/parabank/",
    specPattern: "**/*.feature"
  },
});

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config)
  on("file:preprocessor", browserify.default(config))
  return config;
}
