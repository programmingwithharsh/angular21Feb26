/// <reference types="cypress" />
 
describe('Counter App', () => {
 
    // Runs before each test
    beforeEach(() => {
      cy.visit('http://localhost:4200/about');   // Update if your app runs on a different port
    });
 
    it('should display initial count as 0', () => {
      cy.get('p').should('contain', '0'); // checks if any of them contains 0, assertion pass
    });
 
    it('should increase counter on button click', () => {
      cy.contains('Increase').click();  // Clicks the button
      cy.get('p').should('contain', '1'); // Verify updated count
    });
 
    it('should increase multiple times', () => {
      cy.contains('Increase').click().click().click();
      cy.get('p').should('contain', '3');
    });
 
  });