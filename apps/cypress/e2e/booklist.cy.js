describe("booklist app", () => {
  it("should load the page", () => {
    cy.get("header").within(cy.findByRole("tablist"))
  })
})
