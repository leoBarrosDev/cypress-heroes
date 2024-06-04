/// <reference types="cypress" />

const example = require('../../cypress/fixtures/example')
import 'cypress-file-upload';


describe('NewHero', () => {

    beforeEach(() => {
        cy.restoreSession(example.email_admin, example.password)
    })
    it('should create a new hero', () => {
        cy.visit('/heroes/new')
        cy.get("[name='name']")
            .should('be.visible')
            .clear()
            .type("Quality Guardian")
        cy.get("[name='price']")
            .should('be.visible')
            .clear()
            .type("1000")
        cy.get("[name='fans']")
            .should('be.visible')
            .clear()
            .type("1000")
        cy.get("[name='saves']")
            .should('be.visible')
            .clear()
            .type("1000")

        cy.get('body').trigger('keydown', { keyCode: 17, release: false });

        cy.get("[name='powers']")
            .select(["Flying", "Fireball", "Invisibility", "Mind Control", "Super Speed"], { force: true })

        cy.get('body').trigger('keyup', { keyCode: 17 });

        cy.get("input[accept='image/*']")
            .attachFile('../../cypress/fixtures/guardian.jpg', { force: true })

        cy.contains('Submit')
            .should('be.visible')
            .click()

        cy.url().should('eq', 'http://localhost:3000/heroes')

        cy.contains("Quality Guardian")
            .should('be.visible')
    });
})