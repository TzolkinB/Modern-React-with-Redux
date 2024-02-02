// eslint-disable-next-line import/no-extraneous-dependencies
// import { findByRole } from "@testing-library/cypress"

describe("booklist app", () => {
  it("should load the page", () => {
    cy.intercept("localhost:3030").as("localhost")
    cy.visit("/")
    cy.wait("@localhost")
    cy.get("header")
      .findByRole("tablist")
      .findByRole("tab", { name: "Booklist" })
      .click()
    cy.url().should("include", "/booklist")
  })
})
