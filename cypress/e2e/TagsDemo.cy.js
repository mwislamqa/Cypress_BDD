

describe('tags demo for describle level (regDemo)', { tags: '@regression' }, function () {

    it('first test cases', { tags: '@seneti' }, () => {
        cy.log("@tag user")

    })

    it('second test cases', { tags: ['@senetiDemo, @regression'] }, () => {
        cy.log("@tag user for multi tags")

    })

//npx cypress run --env grepTags= @comtest
//npx cypress run --env grep= regDemo, grepTegs = @senetiDemo 
//npx cypress run --env grep= regDemo 




})