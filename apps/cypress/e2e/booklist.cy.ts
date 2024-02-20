describe("booklist app", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/books", {
      body: [
        {
          title: "Cypress Tips and Tricks",
          id: 1,
        },
      ],
    }).as("getBooks")

    cy.visit("/booklist")
    cy.findByRole("heading", { level: 1, name: "BookList App" })
  })

  const addBook = (length: number) => {
    cy.intercept("POST", "http://localhost:3001/books").as("createBook")

    cy.findByLabelText("Title").type("New Book")
    cy.findByRole("button", { name: "Create" }).click()
    cy.wait("@createBook")
    // Have to have the "i" in the regex or it won't be identified as regex
    // \d{1,3} matches one to three digits in a sequence (1 or 123)
    cy.findAllByTestId(/^card-\d{1,3}$/i)
      .should("have.length", length)
      .and("include.text", "New Book")
  }

  const editBook = () => {
    cy.findByTestId("card-1")
      .should("contain.text", "Cypress Tips and Tricks")
      .within(() => {
        cy.findByRole("button", { name: "Edit" }).click()
      })

    cy.findByTestId("edit-card-1").within(() => {
      cy.findByLabelText("Title")
        .should("have.value", "Cypress Tips and Tricks")
        .as("input")
      cy.findByRole("button", { name: "Save" }).as("saveButton")
      cy.findByRole("button", { name: "Cancel" }).as("cancelButton")

      cy.get("@input").clear()
      cy.get("@input").type("Another Tale")
    })
  }

  it.skip("should click the link and load the page", () => {
    cy.get("header")
      .findByRole("tablist")
      .findByRole("tab", { name: "Booklist" })
      .click()
    cy.url().should("include", "/booklist")
  })

  it("should verify the add book section and successfully add a book", () => {
    cy.wait("@getBooks")
    addBook(2)
  })

  it("should verify the View(default) book UI", () => {
    cy.findByTestId("card-1").within(() => {
      cy.findByTestId("card-header").within(() => {
        cy.findByText("Cypress Tips and Tricks")
        cy.findByRole("button", { name: "delete" })
      })
      cy.findByText("book content here")
      cy.findByRole("button", { name: "Edit" })
    })
  })

  it("should verify the Edit book UI, click Cancel", () => {
    editBook()
    cy.get("@cancelButton").click()

    cy.findByTestId("edit-card-1").should("not.exist")
    cy.findByTestId("card-1")
      .should("not.contain.text", "Another Tale")
      .should("contain.text", "Cypress Tips and Tricks")
  })

  it("should verify the Save book functionality", () => {
    cy.intercept("PUT", "http://localhost:3001/books/1", (req) => {
      req.reply({
        body: { title: "Another Tale", id: 1 },
      })
    }).as("editBook")
    editBook()
    cy.get("@saveButton").click()
    cy.wait("@editBook")

    cy.findByTestId("edit-card-1").should("not.exist")
    cy.findByTestId("card-1")
      .should("not.contain.text", "Cypress Tips and Tricks")
      .should("contain.text", "Another Tale")
  })

  it("should verify the Delect book functionality", () => {
    addBook(2)
    // get newly added book and delete, verify deletion
  })
})
