
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});
describe('Visual Regression Testing', () => {
  it('should match the homepage layout', () => {
    cy.visit('/'); // 1. Navigate to the homepage
    cy.matchImageSnapshot(); // 2. Capture and compare the screenshot to a baseline image
  });
});
