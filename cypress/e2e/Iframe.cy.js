

it('iframe testing ', ()=>{


cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe')

const iFeam =cy.get('title=W3Schools Free Online Web Tutorials')
.its('0.contentDocument.body').should('be.visible').then(cy.wrap)

iFeam.click()
})