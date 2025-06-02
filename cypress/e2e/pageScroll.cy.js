
// cy.scrollIntoView()
// cy.scrollTo()
//cy.get('#movies-list').scrollTo('center')
//cy.get('#movies-list').scrollTo(bottom)

it('scroll', ()=>{

    cy.visit('https://docs.cypress.io/api/commands/scrollto')
   // cy.scrollTo(0,1500)
   // cy.scrollTo('bottom')

    //excact location
    cy.get('#Options').scrollIntoView() //move to element
})