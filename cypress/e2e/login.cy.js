/// <reference types="cypress"/>

describe('Login', () => {
    const emailXPath = '//*[@id="email"]';
    const passwordXPath = '//*[@id="password"]';
    const submitButtonXPath = '//*[@id="submitBTN"]';
    const errorMessageBoxXPath = '//*[@id="fadein"]/div[5]/div[2]/div[2]/div/div';
    const usuario = 'diegopatricio.midia@gmail.com'

    beforeEach(() => {
        cy.visit('/login');
    });

    it('Login com sucesso', () => {
        cy.xpath(emailXPath).type(usuario);
        cy.xpath(passwordXPath).type('teste12345');
        cy.xpath(submitButtonXPath).click();
        cy.url().should('include', '/dashboard');
    });

    it('Login com erro', () => {
        cy.xpath(emailXPath).type(usuario);
        cy.xpath(passwordXPath).type('teste12345rr');
        cy.xpath(submitButtonXPath).click();
        cy.xpath(errorMessageBoxXPath).should('be.visible');
    });
});
