describe("Skenario 3 - Tambah Kategori", () => {
    const validCategoryData = {
      nama: "Makanan",
      deskripsi: "Makanan berat"
    };
  
    const invalidCategoryData = {
      deskripsi: "Makanan berat"
    };
  
    beforeEach(() => {
      //cy.Login("savirarohwina47@mail.com", "123");
    cy.visit("https://kasirdemo.belajarqa.com/");
    cy.get('#email').type("savirarohwina47@mail.com");
    cy.get('#password').type("123");
    cy.get('.chakra-button').click();
    });
  
    it("Positive Add Category", () => {
      cy.get('[href="/categories"] .css-1mqa38q').contains('kategori').click();
      cy.get('.css-1piskbq').contains('tambah').click(); 
      fillCategoryForm(validCategoryData);
      cy.get('.chakra-button').click();

      cy.contains("success").should("be.visible"); 
      cy.contains("item ditambahkan").should("be.visible");
      cy.get('.chakra-toast .css-1xy7m1b [fill="currentColor"]').click();
      cy.url().should("include", "/categories"); 
      cy.contains(validCategoryData.nama, { timeout: 10000 }).should("be.visible");
    });
  
    it("Negative Add Category - Empty Name", () => {
      cy.get('[href="/categories"] .css-1mqa38q').contains('kategori').click();
      cy.get('.css-1piskbq').contains('tambah').click();
      fillCategoryForm(invalidCategoryData);
      cy.get('.chakra-button').click();
      cy.contains("\"name\" is not allowed to be empty").should("be.visible");
    });
  });
  
  function fillCategoryForm(data) {
    if (data.nama) {
      cy.get('#nama').type(data.nama);
    }
    if (data.deskripsi) {
      cy.get('#deskripsi').type(data.deskripsi);
    }
  }
  