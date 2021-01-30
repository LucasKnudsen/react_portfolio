
describe("User can see elements in CV", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('#cv').click();
  });

  it("displays title", () => {
    cy.get('#cv-title').should('contain', "Let's Talk")
  });

  it("displays CV content", () => {
    cy.get("#cv-title").within(() => {
      cy.get('#cv-h1').should("contain", "Curriculum")
    })
  })
})