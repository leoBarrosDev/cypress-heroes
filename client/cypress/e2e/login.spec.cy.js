/// <reference types="cypress" />

const example = require('../../cypress/fixtures/example')

describe('Login Tests', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('should to access with test user ', () => {
        cy.login(example.email_test, example.password)
        cy.contains('Logout').should('be.visible')
        cy.logout()
    })
    it('should to access with admin user ', () => {
        cy.login(example.email_admin, example.password)
        cy.contains('Logout').should('be.visible')
        cy.contains('Create New Hero').should('be.visible')
    })
    it('should not access with invalid email', () => {
        cy.login('invalid', example.password)
        cy.get('.text-red-500').should('be.visible')
            .should('have.text', 'Email is not valid')
    })
    it('should not access with an unregistered email', () => {
        cy.login('invalid@test.com', example.password)
        cy.get('.text-red-500').should('be.visible')
            .should('have.text', 'Invalid email or password')
    })
    it('should not access without email', () => {
        cy.login(' ', example.password)
        cy.get('.text-red-500').should('be.visible')
            .should('have.text', 'Email is required')
    })
    it('should not access with invalid password', () => {
        cy.login(example.email_test, 'test1234')
        cy.get('.text-red-500').should('be.visible')
            .should('have.text', 'Invalid email or password')
    })
    it('should not access without password', () => {
        cy.get('.gap-8').eq(0)
            .click()
        cy.get("[type='email']")
            .type(example.email_test)
            .type('{enter}');
        cy.get('.text-red-500').should('be.visible')
            .should('have.text', 'Password is required')
    })
})