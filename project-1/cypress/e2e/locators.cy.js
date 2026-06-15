/* eslint-env cypress */
/* global cy */
//  a special comment that tells your editor (VS Code, etc.) to load Cypress's type definitions.
/// <reference types="cypress" />

const { type } = require("@testing-library/user-event/dist/type");

// My first ever cypress test

describe("Locaters ", () => {
  beforeEach(() => {
    cy.visit("/elements");
  });

  it("should find all the button elments", () => {
    // get all elements by tag name
    cy.get("button");
    cy.get("h3");
    cy.get("h2");
    // get all elements by class name
    cy.get("[class='Elements-btn btn-with-class']");
    cy.get("[ class ='Elements-btn btn-with-class more-btn-classes']");
    // get all elements by id
    cy.get("#btn-with-id");
    cy.get("[id ='btn-with-id']");
    // get all elements by specific attribute
    cy.get('[type = "submit"]');
    // get all elementys tag name and class
    cy.get("button.Elements-btn");
    // get all elementys tag name and class AND id
    cy.get("button.Elements-btn#btn-with-id");

    // get all elementys by specific data test id
    cy.get("[data-cy ='btn-id-1']");
    //  get elemnets by text
    cy.contains("Unique Text");
    // this only gets the first  matching element
    cy.contains("Not Unique Text");
    cy.contains("[type='submit']", "Not Unique Text");
    cy.get("[type='submit']").contains("Not Unique Text");
  });
});
