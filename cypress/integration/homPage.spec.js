describe('Teste da pagina inicial', () => {
  it('Visita localhost:3000', () => {
    cy.visit('http://localhost:3000');
  })
  it('Verifica conteudo da pagina', () => {
    cy.contains('Header');
    cy.contains('Index');
  });
})