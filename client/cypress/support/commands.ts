/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare namespace Cypress {
    interface Chainable {
        login(email: string, password: string): Chainable<void>
        logout(): Chainable<void>
        drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
        dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
        //visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
    }
}


Cypress.Commands.add('login', (username: string, password: string) => {
    cy.get('.gap-8').eq(0)
        .click()
    cy.get("[type='email']")
        .should('be.visible')
        .type(username)
    //.type('test@test.com')
    cy.get("[name='password']", { log: false })
        .should('be.visible')
        .type(password)
    //.type('test123')
    cy.get('body')
        .contains('Sign in')
        .click()
})

Cypress.Commands.add('logout', () => {
    cy.contains('button', 'Logout').click()
})



