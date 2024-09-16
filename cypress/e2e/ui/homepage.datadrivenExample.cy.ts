/// <reference types="cypress" />

// This event listener prevents Cypress from failing the test in case of an uncaught exception. 
// It's useful for ignoring errors that are unrelated to your tests, but be careful not to mask real issues.
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });
  
  describe('GitHub Homepage Data-Driven Tests', () => {

    // The 'before' hook runs once before all tests in the block.
    // We're using it to load test data from a fixture file ('testData') and storing it in 'this.data'.
    // The fixture file contains predefined data for running tests dynamically.
    before(function () {
      cy.fixture('testData').then(function (data) {
        this.data = data; // 'this' refers to the test context, storing 'data' so it's available in tests.
      });
    });
  
    // The 'beforeEach' hook runs before every test case. Here, we're ensuring the browser starts each test
    // from the base URL ('/') by visiting the homepage before each test case.
    
    beforeEach(() => {
      cy.visit('/'); // Visits the root page of the website (home page).
    });
  
    // This test case loops through each scenario defined in the test data and performs navigation checks.
    // For each scenario, it navigates to a link, verifies the URL, and then goes back.
    it('should navigate to pages based on test data and custom commands', function () {
      // 'this.data.scenarios' is an array of test scenarios where each one includes a 'linkText' and 'expectedUrl'.
      this.data.scenarios.forEach((scenario: { linkText: string; expectedUrl: string }) => {
        // 'cy.navigateAndCheck' is likely a custom Cypress command to click on a link with 'linkText' 
        // and verify that the URL matches 'expectedUrl'.
        cy.navigateAndCheck(scenario.linkText, scenario.expectedUrl);
        
        // After checking, it navigates back to the previous page, ready for the next scenario.
        cy.go('back');
      });
    });
  });
  