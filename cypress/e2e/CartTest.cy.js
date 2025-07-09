/// <reference types ='cypress'/>


import AddtoCarts from "../PageObject/CartPage"

describe('carts suit', { tags: '@smoke' }, () => {

    beforeEach(() => {

        cy.log("before --setup method")
        cy.visit('./')
        cy.loginApp('standard_user', 'secret_sauce');
        
    })
    after(() => {
        cy.log('after --teardown ')
    })

    //f============================
  
    ///================================
    it('test 1', () => {
        cy.log('test 1')
        AddtoCarts.logoTest()

    })

    it('test 2', () => {
        cy.log('test 2')
        AddtoCarts.clickToAdd()
        cy.wait(5000)
    })
    it('test 3', () => {
        cy.log('test 3')
        AddtoCarts.clickToAdd()
        AddtoCarts.AddTocartList()
    })

      it('test 4', () => {
        cy.log('test 4')
         AddtoCarts.clickToAdd()
         AddtoCarts.AddTocartList()
         AddtoCarts.findtheIteam()
    })

    it.skip('test 5', () => {
        cy.log('test 5')
         AddtoCarts.clickToAdd()
         AddtoCarts.AddTocartList()
         AddtoCarts.findtheIteam()
    })


  

})