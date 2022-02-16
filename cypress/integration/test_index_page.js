describe('My First Test', () => {
  it('Visits localhost:3000', () => {
    cy.visit('http://localhost:3000');
    cy.contains('index');
  })
})