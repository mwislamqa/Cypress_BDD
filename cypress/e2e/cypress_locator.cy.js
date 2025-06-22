
//find element from table 
it.skip('compelx locator in cypress', ()=>{

cy.visit('https://www.wikipedia.org/')

cy.get('#searchLanguage').select('Dansk')
//cy.get('table-boy').find('tr th:td')


})


it('dynamic  dropdown', ()=>{

cy.visit('https://www.expedia.com/')
cy.get('[data-stid=destination_form_field-menu-trigger]').click()

// cy.get('#searchLanguage').each(($el, index, $list)=>{
//     cy.log($el.text())

//     if($el.text()==='value'){
//         cy.wrap($el).click()
//     }

// })
//cy.get('table-boy').find('tr th:td')


})