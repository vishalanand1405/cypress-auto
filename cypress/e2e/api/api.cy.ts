/// <reference types="cypress" />

describe('GitHub API Tests', () => {
    it('should fetch repositories for a user', () => {
      // Mentor Note: Using cy.request to test API endpoints is efficient for API validation.
      cy.request(`${Cypress.env('API_BASE_URL')}/users/vishalanand1405/repos`)
        .its('status')
        .should('eq', 200);
    });
  
    it('should fetch user profile information', () => {
      cy.request(`${Cypress.env('API_BASE_URL')}/users/vishalanand1405`)
        .its('body')
        .should('include', { login: 'vishalanand1405' });
    });
  });
  