describe("Smoke tests", () => {
  it("should have 4 tabs in the nav bar", () => {
    const tabNames = ["Home", "Animals", "Booklist", "Image Browser"]

    cy.intercept("localhost:3030").as("localhost")
    cy.visit("/")
    cy.wait("@localhost")
    cy.get("header")
      .findByRole("tablist")
      .as("navTabs")
      .findAllByRole("tab")
      .should("have.length", 4)

    tabNames.forEach((tabName) => {
      cy.get("@navTabs").findByRole("tab", {
        name: tabName,
      })
    })
  })
})
