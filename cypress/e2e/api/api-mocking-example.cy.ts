/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });
  
  describe('GitHub API Mocking', () => {
    // The 'beforeEach' hook runs before every test case, ensuring the browser starts each test
    // by visiting the homepage ('/'). This sets up the correct environment for tests to run.
    beforeEach(() => {
      cy.visit('/'); // Visits the root page of the website (home page).
    });
  
    // This test case mocks an API response and verifies the application's behavior with the mocked data.
    it('should handle mocked API responses', () => {
      // 'cy.intercept' is used to mock the API call to GitHub's repo endpoint.
      // Instead of making the actual request, this will respond with a 404 status and a 'Not Found' message.
      cy.intercept('GET', `${Cypress.env('API_BASE_URL')}/users/vishalxxxanand1405/repos`, {
        statusCode: 404, // Mocked response code to simulate a "Not Found" error.
        body: { message: 'Not Found' }, // Mocked response body.
      }).as('getRepos'); // Alias for this intercepted request, which can be used for later reference.
  
      // The next block is where the actual API call would be triggered in the application.
      // For demonstration purposes, we're directly making a request using 'cy.request' to the same endpoint.
      // The 'failOnStatusCode: false' option ensures that the test continues even if a non-200 status code is returned.
      cy.request({
        url: `${Cypress.env('API_BASE_URL')}/users/vishalxxxanand1405/repos`, // The endpoint to hit.
        failOnStatusCode: false, // Continue even if the response is 404.
      }).then((response) => {
        // Once the request is complete, assert that the status code and message match the mocked response.
        expect(response.status).to.equal(404); // Verifies that the status code is 404.
        expect(response.body.message).to.equal('Not Found'); // Verifies that the response body contains 'Not Found' message.
      });
    });
  });
  