/// <reference types="cypress"/>

describe('Reserva', () => {
    const emailXPath = '//*[@id="email"]';
    const passwordXPath = '//*[@id="password"]';
    const submitButtonXPath = '//*[@id="submitBTN"]';
    const usuario = 'diegopatricio.midia@gmail.com'
    const hotel = '//*[@id="tab"]/li[2]/button'
    const localizacao = '//*[@id="hotels-search"]/div/div[1]/div[1]/span/span[1]'
    const dubai = '//*[@id="select2-hotels_city-results"]/div/div[1]'
    const travellers =  '//*[@id="hotels-search"]/div/div[4]/div/div/div'
    const addAdults = '//*[@id="hotels_adults"]'
    const search = '//*[@id="hotels-search"]/div/div[5]/button'
    const bookNow = '//*[@id="fadein"]/div[3]/div/div[3]/div[3]/div[2]/form[1]/div/div[4]/div/div/div/button'
    const fiveStar = ':nth-child(12) > .card > .card-body > .fadeout'

    beforeEach(() => {
        cy.visit('/login');
    });

    it('Reserva com sucesso', () => {
        cy.xpath(emailXPath).type(usuario);
        cy.xpath(passwordXPath).type('teste12345');
        cy.xpath(submitButtonXPath).click();
        cy.visit('/');
        cy.xpath(hotel).click();
        cy.xpath(localizacao).click();
        cy.xpath(dubai).click();
        cy.xpath(travellers).click();
        cy.xpath(addAdults).clear().type('3');    
        cy.xpath(addAdults).should('have.value', '3');
        cy.get('#nationality').select('Italy');
        cy.get('#nationality').should('have.value', 'IT');
        cy.xpath(search).click();

        cy.get(fiveStar).scrollIntoView();
        cy.get(fiveStar).should('be.visible');
        cy.get(fiveStar).click();

        cy.url().should('include', '/hotel/142292/avani-deira-dubai-hotel/14-01-2024/15-01-2024/1/3/0/IT/hotelbeds#rooms');
        cy.xpath(bookNow).click();
        cy.url().should('include','/hotels/booking');
       

    });
});
