describe("booklist app", () => {
  it("should click the link and load the page", () => {
    cy.intercept("localhost:3030").as("localhost")
    cy.visit("/")
    cy.wait("@localhost")
    cy.get("header")
      .findByRole("tablist")
      .findByRole("tab", { name: "Booklist" })
      .click()
    cy.url().should("include", "/booklist")

    cy.findByRole("heading", { level: 1, name: "BookList App" })
  })

  it("should verify the add book section and successfully add a book", () => {

  })

  it("should verify the View(default) book UI", () => {

  })

  it("should verify the Edit book UI", () => {

  })

  it("should verify the Cancel book UI and functionality", () => {
    
  })

  it("should verify the Save book UI and functionality", () => {
    
  })
})
