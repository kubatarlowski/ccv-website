Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('Home Page test', function () {
  it('Renders Home Page correctly', function () {
    cy.visit('http://localhost:1313')

    cy.contains('Learn About CCV Services').click()

    cy.url()
      .should('include', 'services')
  })
})
