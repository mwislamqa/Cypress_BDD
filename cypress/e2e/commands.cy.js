
// comming for ./support/commands.js we can store common code and we can use it everythere.

it('login test',{tags:'@smoke'},  ()=>{
cy.visit('./')
cy.loginApp('standard_user', 'secret_sauce');
//cy.url().should('include', '/dashboard');


})

// it('login out test',  ()=>{

// cy.loginAppOut();
// //cy.url().should('include', '/dashboard');


// })
