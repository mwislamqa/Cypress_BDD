
 import example from '../fixtures/example.json'
it("red data from fixture ", ()=>{
cy.visit('https://www.saucedemo.com/')
    cy.fixture('example').then((data)=>{

        console.log(data.uName)


       cy.url().should('include','https://www.saucedemo.com/')

       cy.get('#user-name').type(data.uName)
       cy.get('#password').type(data.password)
       cy.get('#login-button').click()
    

    })


})