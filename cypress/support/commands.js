// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command -- {we can use common method from here }
Cypress.Commands.add('loginApp', (userName, password) => { 

 
 // cy.xpath("//input[@id='user-name']").type(userName);
  ////input[@id='user-name']
  cy.get('#user-name').type(userName);
  cy.get('#password').type(password);
  cy.get('#login-button').click();


 })

 Cypress.Commands.add('loginAppOut', () => { 
cy.visit('https://www.saucedemo.com/');
  cy.get('#user-name').type(userName);
  cy.get('#password').type(password);
  cy.get('#login-button').click();
  
  cy.get('#react-burger-menu-btn').click()
  cy.get('#logout_sidebar_link').click()
 


 })



Cypress.Commands.add('getIframeBody', (iframe) => {
  // get the iframe > document > body
  // and retry until the body element is not empty
  return cy
  .get(iframe)
  .its('0.contentDocument.body').should('not.be.empty')
  // wraps "body" DOM element to allow
  // chaining more Cypress commands, like ".find(...)"
  // https://on.cypress.io/wrap
  .then(cy.wrap)
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress.screenshot.defaults({
//     screenshotOnRunFailure:false
// })

require('cypress-xpath');