/// <reference types="cypress" />
describe("Mock Accomplishmet dashboard", () => {
  beforeEach(() => {
    cy.visit("/accomplishments");
  });

  // TEST,  that gets error message from server
  it("should display a error message when inappropriate text is typed", () => {
    cy.get("[placeholder='Title']").type("Write your title here ");
    cy.get("[placeholder='My accomplishment...']").type(" l like giraffe");
    cy.get("input[type='checkbox']").click();
    cy.get("button").click();
    cy.contains("Your content is not appropriate");
  });

  // TEST, that gets error message from  mock server
  it("should display a error message when inappropriate text is typed", () => {
    //Intercept = Catch the HTTP request before it reaches the server
    cy.intercept("POST", "http://localhost:4000/", (req) => {
      req.reply((res) => {
        res.send({
          msg: "Your content is not appropriate",
        });
      });
    });
    cy.get("[placeholder='Title']").type("Write your title here ");
    cy.get("[placeholder='My accomplishment...']").type(" l like giraffe");
    cy.get("input[type='checkbox']").click();
    cy.get("button").click();
    cy.contains("Your content is not appropriate");
  });
});
