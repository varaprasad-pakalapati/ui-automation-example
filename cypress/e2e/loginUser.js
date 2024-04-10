import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I have para soft test website", () => {
    cy.visit("");
})

When("I enter login details {string} and {string}", (userName, password) => {
    cy.get("[name=username]").type(userName);
    cy.get("[name=password]").type(password);
})

When("I click on login button", () => {
    cy.get("[value=Log\\ In]").click();
})

Then("I verify user logged in successfully", () => {
    cy.get(".title").should('contain.text', "Accounts Overview");
})