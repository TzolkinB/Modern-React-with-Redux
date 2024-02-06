describe("Home page tests", () => {
  beforeEach(() => {
    cy.intercept("localhost:3030").as("localhost")
    cy.visit("/")
    cy.wait("@localhost")
  })

  it("should have 4 tabs in the nav bar", () => {
    const tabNamesLinks = [
      { name: "Home", link: "/" },
      { name: "Animals", link: "/animals" },
      { name: "Booklist", link: "/booklist" },
      { name: "Image Browser", link: "/image-browser" },
    ]

    cy.get("header")
      .findByRole("tablist")
      .as("navTabs")
      .findAllByRole("tab")
      .should("have.length", 4)

    tabNamesLinks.forEach((tab) => {
      cy.get("@navTabs")
        .findByRole("tab", {
          name: tab.name,
        })
        .should("have.attr", "href", tab.link)
    })
  })

  it("should have content", () => {
    cy.findByRole("heading", { level: 1, name: "Multi-App Homepage" })
    cy.findByText("Apps to choose from are:", { exact: false })
  })
})
