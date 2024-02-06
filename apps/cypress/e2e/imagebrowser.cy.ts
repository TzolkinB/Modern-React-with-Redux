describe("image browser app", () => {
  beforeEach(() => {
    cy.visit("/image-browser")

    cy.findByRole("heading", { level: 1, name: "Unsplash Image Search" })
  })

  it("should search successfully and show the images", () => {
    cy.findByLabelText("Search Field").should("not.have.value").as("search")
    cy.get("@search").type("beach{enter}")
    // cy.get("@search").sub

    // cy.intercept("GET", "https://api.unsplash.com/search/photos?query=beach").as("unsplash")
    // cy.wait("@unsplash", { requestTimeout: 10000 })
    cy.get("li").should("have.length", 10)
  })

  it("should search Unsuccessfully and show an error message", () => {
    cy.findByLabelText("Search Field").should("not.have.value").as("search")
    cy.get("@search").type("asdf{enter}")

    cy.get("li").should("not.exist")
    cy.findByText("No search results. Try again.")
  })
})
