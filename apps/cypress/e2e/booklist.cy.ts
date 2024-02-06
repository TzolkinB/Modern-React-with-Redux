describe("booklist app", () => {
  beforeEach(() => {
    cy.visit("/booklist")

    cy.findByRole("heading", { level: 1, name: "BookList App" })
  })

  const addBook = () => {
    cy.findByLabelText("Title").type("New Book")
    cy.findByRole("button", { name: "Create" }).click()
    // Have to have the "i" in the regex or it won't be identified as regex
    cy.findByTestId(/^card-\d{4}$/i)
  }

  it.skip("should click the link and load the page", () => {
    cy.get("header")
      .findByRole("tablist")
      .findByRole("tab", { name: "Booklist" })
      .click()
    cy.url().should("include", "/booklist")
  })

  it("should verify the add book section and successfully add a book", () => {
    addBook()
  })

  it("should verify the View(default) book UI", () => {
    // TODO: Once data persists with adding a server, the addBook() can be removed and api can be stubbed instead
    addBook()

    cy.findByTestId(/^card-\d{4}$/i).within(() => {
      cy.findByTestId("card-header").within(() => {
        cy.findByText("New Book")
        cy.findByRole("button", { name: "delete" })
      })
      cy.findByText("book content here")
      cy.findByRole("button", { name: "Edit" })
    })
  })

  it("should verify the Edit book UI, click Cancel", () => {
    // TODO: Once data persists with adding a server, the addBook() can be removed and api can be stubbed instead
    addBook()

    cy.findByTestId(/^card-\d{4}$/i)
      .should("contain.text", "New Book")
      .within(() => {
        cy.findByRole("button", { name: "Edit" }).click()
      })

    cy.findByTestId(/^edit-card-\d{4}$/i).within(() => {
      cy.findByLabelText("Title").should("have.value", "New Book").as("input")
      cy.findByRole("button", { name: "Save" })
      cy.findByRole("button", { name: "Cancel" }).as("cancelButton")

      cy.get("@input").clear()
      cy.get("@input").type("Another Tale")
      cy.get("@cancelButton").click()
    })

    cy.findByTestId(/^edit-card-\d{4}$/i).should("not.exist")
    cy.findByTestId(/^card-\d{4}$/i)
      .should("not.contain.text", "Another Tale")
      .should("contain.text", "New Book")
  })

  it("should verify the Save book functionality", () => {
    // TODO: Once data persists with adding a server, the addBook() can be removed and api can be stubbed instead
    addBook()

    cy.findByTestId(/^card-\d{4}$/i)
      .should("contain.text", "New Book")
      .within(() => {
        cy.findByRole("button", { name: "Edit" }).click()
      })

    cy.findByTestId(/^edit-card-\d{4}$/i).within(() => {
      cy.findByLabelText("Title").clear()
      cy.findByLabelText("Title").type("Another Tale")
      cy.findByRole("button", { name: "Save" }).click()
    })

    cy.findByTestId(/^edit-card-\d{4}$/i).should("not.exist")
    cy.findByTestId(/^card-\d{4}$/i)
      .should("not.contain.text", "New Book")
      .should("contain.text", "Another Tale")
  })
})
