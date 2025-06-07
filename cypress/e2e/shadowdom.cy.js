


it('shadowdom testing', ()=>{


    cy.visit('https://selectorshub.com/xpath-practice-page/')
    //cy.get('#myFile').scrollIntoView()
    // cy.get('#userName')//child locator before shdow root
    //    .shadow()
    //    .find('#app2')
    //    .shadow()
    //    .find('#pizza').clear()
    //    .type('i love cypress')

     
      // cy.scrollTo(0,1500)
      cy.get('#shub43').type('ssss@gmail.com')
       cy.get('#userName').shadow().find('input#kils').type("cypress")
      // cy.get('#userName').shadow().find('#app2').shadow().find('#pizza').type("cypress")
    //        //    .shadow()
    //    .find('#pizza').type('selenium')
       
       //cy.get('#pizza',{ timeout: 10000 }, {includeShadowDom: true}).clear().type('i love cypress')


      
})