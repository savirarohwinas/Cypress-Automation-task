
describe("Skenario 2 - Tambah Pelanggan", () => {
    const validCustomerData = {
      nama: "Sarah",
      no_hp: "08212345678",
      alamat: "margahayu bandung",
      keterangan: "pelanggan tetap"
    };
  
    const invalidCustomerData = {
      nama: "Sarah",
      no_hp: "abcd",
      alamat: "margahayu bandung",
      keterangan: "pelanggan tetap"
    };
  
    beforeEach(() => {
    //cy.Login("savirarohwina47@mail.com", "123");
    cy.visit("https://kasirdemo.belajarqa.com/");
    cy.get('#email').type("savirarohwina47@mail.com");
    cy.get('#password').type("123");
    cy.get('.chakra-button').click();
    });
  
    it("Positive Case -  Successfully Add Customer", () => {
      cy.get('a:nth-of-type(8) .css-1mqa38q').contains('pelanggan').click();
      cy.get('.css-1piskbq').contains('tambah').click(); 
      cy.get('#nama').type(validCustomerData.nama);
      cy.get('[id="no.hp"]').type(validCustomerData.no_hp);
      cy.get('#alamat').type(validCustomerData.alamat);
      cy.get('#keterangan').type(validCustomerData.keterangan);
      cy.get('.chakra-button').click();
  
      cy.contains("success").should("be.visible"); 
      cy.contains("item ditambahkan").should("be.visible");
      cy.get('.chakra-toast .css-1xy7m1b [fill="currentColor"]').click();
      cy.url().should("include", "/customers"); 
      cy.contains(validCustomerData.nama, { timeout: 10000 }).should("be.visible");

    });
  
    it("Negative Case - 'Error message 'phone' must be a number' is displayed.", () => {
      cy.get('a:nth-of-type(8) .css-1mqa38q').contains('pelanggan').click();
      cy.get('.css-1piskbq').contains('tambah').click();
      cy.get('#nama').type(invalidCustomerData.nama);
      cy.get('[id="no.hp"]').type(invalidCustomerData.no_hp);
      cy.get('#alamat').type(invalidCustomerData.alamat);
      cy.get('#keterangan').type(invalidCustomerData.keterangan);
      cy.get('.chakra-button').click();
  
      cy.get(".chakra-alert").should("be.visible");
      cy.contains("\"phone\" must be a number").should("be.visible"); 
      cy.url().should("include", "/customers/create"); 
    });
  });
  