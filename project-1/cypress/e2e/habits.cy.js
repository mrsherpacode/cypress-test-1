/// <reference types="cypress" />

const { click } = require("@testing-library/user-event/dist/click");

describe("habit dashboard", () => {
  beforeEach(() => {
    cy.visit("/habits");
  });

  it("should display model window when clicked on add button", () => {
    cy.get("#habit-add-btn").click();
    cy.contains("Add a new habit").should("be.visible");
  });

  it("should be able to change the input text", () => {
    cy.get("#habit-add-btn").click();
    cy.contains("Add a new habit").should("be.visible");
    cy.get("input[placeholder='Habit']").type("add a new habit");
    cy.contains("Save Changes").should("be.visible").click();
    cy.contains("add a new habit");
  });

  it("should toggle icon when habit card is clicked", () => {
    cy.get("#habit-add-btn").click();
    cy.get("input[placeholder='Habit']").type("add a new habit");
    cy.contains("Save Changes").should("be.visible").click();
    cy.get(
      "img[src='/static/media/close.fa7e5ead5078dad970c8de0491992cf5.svg']",
    );
    cy.contains("add a new habit").click();
    cy.get(
      "img[src='/static/media/check.9e8832df330a1f2d4855cadd8e342e84.svg']",
    ).should("be.visible");
  });
});
