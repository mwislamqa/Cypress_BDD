


it('shadowdom testing', ()=>{


    cy.visit('https://selectorshub.com/xpath-practice-page/')
    //cy.get('#myFile').scrollIntoView()
    // cy.get('#userName')//child locator before shdow root
    //    .shadow()
    //    .find('#app2')
    //    .shadow()
    //    .find('#pizza').clear()
    //    .type('i love cypress')

    
       cy.get('#pizza', {includeShadowDom: true}).clear().type('i love cypress')
})