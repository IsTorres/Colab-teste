const URL_HOME = "http://localhost:3000";

describe("Teste da pagina", () => {
  it("Visita localhost:3000", () => {
    cy.visit(URL_HOME);
  });

  it("Verifica titulo da pagina", () => {
    cy.get("h1").contains("Lista de usuários");
  });

  it("verifica componente de listagem de usuarios", () => {
    cy.get("div > ul > li");
    cy.get("div > ul").children().should("have.length", 8);
  });

  describe("teste dos cards de usuarios", () => {
    it("verifica card de usuario retraido", () => {
      cy.get("#basic-info").children().should("have.length", 3);
      cy.get("#basic-info").find("h3").not("null");
    });

    it("verifica #full-info", () => {
      cy.get("#full-info").find("div").should("have.length", 3);
    });

    it("verifica #location-info", () => {
      cy.get("#location-info").contains("Street");
      cy.get("#location-info").contains("City");
      cy.get("#location-info").contains("State");
      cy.get("#location-info").contains("Country");
      cy.get("#location-info").contains("PostCode");
    });
  });
});
