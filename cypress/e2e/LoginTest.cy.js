/// <reference types ='cypress'/>

import LoginPage from "../PageObject/LoginPage"

import AddtoCarts from "../PageObject/CartPage"

describe('login suit', { tags: '@smoke' }, () => {

    beforeEach(() => {

        cy.log("before --setup method")
        LoginPage.visit()
        
    })
    after(() => {
        cy.log('after --teardown ')
    })

    //f============================
    // beforeEach(() => {
    //     cy.log('before every each test')
    // })
    // afterEach(() => {
    //     cy.log('after every each test')
    // })
    ///================================
    it('test 1', () => {
        cy.log('test 1')
        LoginPage.title_test()
       
    })

    it('test 2', () => {
        cy.log('test 2')
        AddtoCarts.clickToAdd()
    })
    it('test 3', () => {
        cy.log('test 3')
    })

    it('login page test', () => {

        //   cy.fixture('example').then((data)=>{
        //     LoginPage.visit()
        //     cy.url().should('include','https://www.saucedemo.com/')

        //     LoginPage.userName('standard_user')//userName
        //     LoginPage.password('secret_sauce')
        //     LoginPage.loginButton()
        //   })


        //LoginPage.visit()
        // cy.url().should('include','https://www.saucedemo.com/')
        // LoginPage.userName()
        // LoginPage.password()
        // LoginPage.loginButton()


    })

})