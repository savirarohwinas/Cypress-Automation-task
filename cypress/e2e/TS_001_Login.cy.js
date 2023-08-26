describe("Scenario 1 - Login", () => {
  it("Positive Case - Successfully login and  redirected to the dashboard page", () => {
    cy.visit("https://kasirdemo.belajarqa.com/");
    cy.get('#email').type("savirarohwina47@mail.com");
    cy.get('#password').type("123");
    cy.get('.chakra-button').click();
    cy.url().should("include", "/dashboard");
    cy.contains("hai").should("be.visible"); 
    cy.contains("total penjualan").should("be.visible");
    cy.contains("total pembelian").should("be.visible");


  });

  it("Negative case - Error message 'Kredensial yang Anda berikan salah' displayed.", () => {
    cy.visit("https://kasirdemo.belajarqa.com/");
    cy.get('#email').type("savirarohwina47@mail.com");
    cy.get('#password').type("12345678");
    cy.get('.chakra-button').click();
    cy.get(".chakra-alert").should("be.visible");
    cy.contains("Kredensial yang Anda berikan salah").should("be.visible");
    
  });
});