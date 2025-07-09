/// <reference types ='cypress'/>
import { faker } from '@faker-js/faker'
describe('api testing ', () => {
    const fulpersonname = faker.person.fullName()
    const qa = faker.person.jobTitle() 
   

    it('post  metod faker data', () => {

        cy.request({
            method: 'post',

            url: 'https://reqres.in/api/users',

            body: {
                name: fulpersonname,
                job: qa
            }
        })
            .then(request => {
                expect(request.status).to.eql(201)
                //  expect(request.body.data[0].id).to.eql(7)
                console.log(request)
                cy.log(JSON.stringify(request))
            })



    })


    it('get api should assertion', () => {

        cy.request('GET', 'https://reqres.in/api/users?page=2')

    })

    it('get metod validate', () => {

        cy.request({
            match: 'GET',

            url: 'https://reqres.in/api/users?page=2'
        })
            .then(request => {
                expect(request.status).to.eql(200)
                expect(request.body.data[0].id).to.eql(7)

            })



    })

    it('post reqest fixture data', () => {
        cy.fixture('postdata').then((data) => {
            const requestBody = data;
            cy.request({
                method: 'POST',
                url: 'https://reqres.in/api/users',
                body: requestBody

            }).then(res => {
                expect(res.status).to.eq(201)
                expect(res.body.name).to.eq('md islam')
                //expect(res.body).has.property('name','morpheus')
               cy.log(JSON.stringify(res))
               
            })

        })



    })


})

