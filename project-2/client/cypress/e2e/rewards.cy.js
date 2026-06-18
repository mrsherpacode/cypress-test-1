/// <reference types="cypress" />

describe("Rewards dashboard", () => {
  beforeEach(() => {
    cy.visit("/rewards");
  });
  // it tests, getting data from sever and rending on the client
  it("should get the list of rewards ", () => {
    cy.get("ul")
      .should(
        "contain",
        "500 points for drinking 8 cups of water for 7 straight days",
      )
      .and("contain", "850 points for fasting for 5 days straight");
  });

  // it tests, mocking sever data  and rending on the client
  it("should get the list of rewards from moking request ", () => {
    cy.intercept("GET", "http://localhost:4000/rewards", {
      fixture: "rewards.json",
    });
    cy.get("ul")
      .should(
        "contain",
        "500 points for drinking 8 cups of water for 7 straight days",
      )
      .and("contain", "850 points for fasting for 5 days straight")
      .and("contain", "250 points for exercising for 3 straight days");
  });
});
