import { expect } from "chai"

// locator veriables
const URL = 'https://www.saucedemo.com/'
const userName = '#user-name'
const password = '#password'
const loginButton = '#login-button'

class LoginPage {


       // static visit(){
       //     cy.visit(URL)
       // }
       // static userName(uName){
       //     cy.get(userName)
       // }
       // static password(pwd){
       //     cy.get(password)
       // }

       // static loginButton(){
       //     cy.get(loginButton).click()
       // }


       //direct value
       // static visit(){
       //      cy.visit(URL)
       // }
       // static userName(){
       //     cy.get(userName).type('standard_user')
       // }
       // static password(){
       //     cy.get(password).type('secret_sauce')
       // }

       // static loginButton(){
       //     cy.get(loginButton).click()
       // }
       //title test
       static title_test() {

              cy.title().then((title) => {
                     expect(title).to.contain('Swag Labs');
              });


       }

       //direct value
       static visit() {
              cy.visit('./')// code in cypress.config.js
              cy.get(userName).type('standard_user')
              cy.get(password).type('secret_sauce')
              cy.get(loginButton).should('be.visible')
              cy.get(loginButton).click()
       }


}

export default LoginPage;