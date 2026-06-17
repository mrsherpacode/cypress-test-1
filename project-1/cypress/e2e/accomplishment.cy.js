/// <reference types="cypress" />
describe("Accomplishments dashboard", () => {
  beforeEach(() => {
    cy.visit("/accomplishments");
  });
  // reuseable function
  const fillForm = () => {
    cy.get("input[data-cy='accomplishment-title-input']").type("project-1");
    cy.get("textarea[data-cy='accomplishment-input']").type(
      "finished the project",
    );
  };
  it("should not be able to submit accomplishment without checking the checkbox", () => {
    fillForm();
    cy.get(".Accomplishment-btn").click();
    cy.contains("Complete the items above to continue");
  });
  // cypress is asynchronous
  it("should not be able to submit accomplishment without checking the checkbox", () => {
    fillForm();
    cy.get("input[type='checkbox']").click().should("be.checked");
    cy.get(".Accomplishment-btn").click();
    cy.contains("This Accomplisment was Successfully Submitted");
  });

  it("should have all the input elements empty when go back button is clicked", () => {
    fillForm();
    cy.get("input[type='checkbox']").click().should("be.checked");
    cy.get(".Accomplishment-btn").click();
    cy.contains("This Accomplisment was Successfully Submitted");
    cy.contains("button", "Go Back").click();
    cy.get("input[data-cy='accomplishment-title-input']").should("be.empty");
    cy.get("textarea[data-cy='accomplishment-input']").should("be.empty");
    cy.get("input[type='checkbox']").should("not.be.checked");
  });
});
