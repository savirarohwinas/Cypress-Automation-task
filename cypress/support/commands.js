
Cypress.Commands.add("login", (username, password) => {
  cy.visit("https://kasirdemo.belajarqa.com/");
  cy.get('#email').type(username);
  cy.get('#password').type(password);
  cy.get('.chakra-button').click();
});