/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Check if gravatar is called', () => {
    cy.get('input').type('baptiste.lecocq@gmail.com');
    cy.get('img').should('have.attr', 'src', 'https://www.gravatar.com/avatar/8781ca2a4ea5a9bc0db653f9ba19ebeb');
  })
})
