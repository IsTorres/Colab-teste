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
    });

    it("verifica #full-info", () => {
      cy.get("#full-info").should("not.exist");
      cy.get("#btn-more-info").click();
      cy.get("#full-info").should("be.visible");
      cy.get("#full-info").find("div").should("have.length", 3);
      cy.get("#btn-more-info").click();
      cy.get("#full-info").should("not.exist");
    });
  });
});
