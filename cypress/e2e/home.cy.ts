describe('Home Page', () => {
  it('should display the developer name', () => {
    cy.visit('https://danieleksantos.vercel.app/')
    cy.contains('Daniele K. Santos').should('be.visible')
  })
})