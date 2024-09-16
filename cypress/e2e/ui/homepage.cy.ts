/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});

describe('GitHub Homepage UI Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the GitHub logo', () => {
    // Mentor Note: Verifying the visibility of the GitHub logo ensures that the homepage loaded correctly.
    cy.get('a[href="/"]').should('be.visible');
  });

  it('should navigate to the sign-up page when "Sign up" button is clicked', () => {
    // Mentor Note: It's important to test navigation to critical pages like the Sign-up page.

        // Mentor Note:Find the "Sign up" button and ensure it is clickable
        cy.contains('Sign up').should('be.visible').and('not.be.disabled').click();
    
        //Mentor Note: Verify that the Sign-Up page is loaded by checking the URL or an element on the page
        cy.url().should('include', '/signup');
  });


  it('should navigate to the Pricing page when "Pricing" is clicked', () => {
    //Mentor Note :  Check the "Pricing" link redirects correctly
    cy.contains('Pricing').should('be.visible').click();
    cy.url().should('include', '/pricing');
  });

  it('should navigate to the Enterprise Edition Link page when "En" is clicked', () => {
    //Mentor Note :  Mouseover and Hovers on the "Enterprise" link and click Enterprise Platform which redirects correctly to the Enterprise Page
    cy.get(':nth-child(5) > .HeaderMenu-link').should('be.visible').click().invoke('show');
    cy.contains('Enterprise platform').should('be.visible').click();
    cy.url().should('include', '/enterprise');
  });
});
