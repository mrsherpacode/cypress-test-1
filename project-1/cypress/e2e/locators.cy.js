/* eslint-env cypress */
/* global cy */
//  a special comment that tells your editor (VS Code, etc.) to load Cypress's type definitions.
/// <reference types="cypress" />

// My first ever cypress test

describe("Locaters ", () => {
  beforeEach(() => {
    cy.visit("/elements");
  });

  it("should find all the button elments", () => {
    cy.get("button");
    cy.get("h3");
    cy.get("h2");
  });
});
