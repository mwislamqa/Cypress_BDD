
describe('test suite (somketageinsuite)', function() {
   // cy.log('describle block')
before(()=>{
    cy.log('before all test')
})// set up method only once for all test case 
after(()=>{
    cy.log('after all test')
})//tear down method only onece for all test after.
beforeEach(()=>{
cy.log('before each block')
})

afterEach(()=>{
cy.log('after each block')
     })

it('login test',{tags:'@smoke'},  ()=>{

cy.log('test1 1')

})

it('login out test',  ()=>{
cy.log('test2')


})

})


//------------------------
describe('test suite 1 (somketageinsuite)', function() {
   // cy.log('describle block')
before(()=>{
    cy.log('before all test')
})// set up method only once for all test case 
after(()=>{
    cy.log('after all test')
})//tear down method only onece for all test after.
beforeEach(()=>{
cy.log('before each block')
})

afterEach(()=>{
cy.log('after each block')
     })

it('login test',{tags:'@smoke'},  ()=>{

cy.log('test1 1')

})

it('login out test',  ()=>{
cy.log('test2')


})

})