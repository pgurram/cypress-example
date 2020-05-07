import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('A student opens Griffith university page', () => {
    cy.visit('https://www.griffith.edu.au/')
});

When('clicks on browse all degrees link', () => {
    cy.get('a[title="Explore the wide range of study areas and degrees at Griffith"]').click
});

Then('all the available study areas are displayed', () => {
    cy.contains('Study areas', { timeout: 5000 }).should('be.be.visible')
});