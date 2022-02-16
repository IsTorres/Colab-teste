const URL_HOME = "http://localhost:3000";

describe("Teste da pagina inicial", () => {
  before(function () {
    cy.visit(URL_HOME);
  });

  it("Visita localhost:3000", () => {
    cy.visit(URL_HOME);
  });

  it("Verifica titulo da pagina", () => {
    cy.get("h1").contains("Lista de usuários");
  });

  it("verifica componente de listagem de usuarios", () => {
    cy.get("div > ul > li");
    cy.get('div > ul').children().should('have.length', 8)
  });
});
