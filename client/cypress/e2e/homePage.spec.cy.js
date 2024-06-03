/// <reference types="cypress" />

describe('HomePage Tests', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('should display title, login button and heroe', () => {
        cy.get("[alt='Cypress Heroes Logo']")
            .should('be.visible')
        cy.get('.gap-8').eq(0)
            .should('be.visible')
        cy.get("[data-cy='hero-card']").eq(0)
            .should('be.visible')
    })
})