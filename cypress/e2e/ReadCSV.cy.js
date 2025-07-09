const neatCSV = require('neat-csv')
let table;
//npm install neat-csv     need to install
describe('test suite 1 (somketageinsuite)', function() {
before(() =>{
    cy.fixture('excel.csv')
      .then(neatCSV).then(data =>{
        table= data;
      })
})

    it('data read form cvs ', () => {

        console.log(records)
        cy.visit('https://www.saucedemo.com/')
         cy.get('#user-name').type(table[0][userName])
         cy.get('#password').type(table[1][password])
         cy.get('#login-button').click()


    })

})