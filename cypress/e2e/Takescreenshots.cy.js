it('take screenshots', ( )=>{

cy.visit("https://www.saucedemo.com/")
cy.screenshot("homepage")
cy.get('#login-button').filter('[name=login-button]').screenshot("logo");


})