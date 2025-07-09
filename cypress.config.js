const { defineConfig } = require("cypress");

module.exports = defineConfig({
 chromeWebSecurity:false,
  //retries: 1,
  reporter: 'cypress-mochawesome-reporter',//html report mochawesome
  screenshotOnRunFailure: true,
  e2e: {  
    "baseUrl": "https://www.saucedemo.com/",
   
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);// reporter
      // implement node event listeners here
      on('after:screenshot', (details) => {
        /* ... */
      })
    },
  },
  //"includeShadowDom": true
});




