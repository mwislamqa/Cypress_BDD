

const logo= '.app_logo';
const add= '#add-to-cart-sauce-labs-backpack'
const checkButton='.shopping_cart_link'
const backPackName='.inventory_item_name'
const checkout ='#checkout'
const fName='#first-name'
const lName='#last-name'
const postcode='#postal-code'
const continueButton ='#continue'
const checkoutTitle ='.title'

class AddtoCarts{

    static logoTest(){
        cy.get(logo)
        .should('have.text','Swag Labs')
    }

    static clickToAdd(){
        cy.get(add).click()
    }
    static AddTocartList(){
       cy.get(checkButton).click()
         cy.wait(3000)
    }
    static findtheIteam(){
       cy.get(backPackName).should('contain', 'Sauce Labs Backpack')
        cy.wait(3000)
    }



}

export default AddtoCarts;