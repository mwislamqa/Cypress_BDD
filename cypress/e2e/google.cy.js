
it('google search', ()=>{


    cy.visit('https://www.google.com/')
    cy.url().should('include','https://www.google.com/')
    .and('contain','google')
    .and('eq','https://www.google.com/')
    cy.get('[name=q]').should('be.visible')
    cy.xpath("//*[@name='q']").type('cypress automation')
    //wait
     //
    cy.wait(10 * 1000)
    cy.get('[name=q]').type('{enter}')
})