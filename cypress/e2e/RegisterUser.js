import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I have para soft test website", () => {
    cy.visit("");
})

When("I click on register link", () => {
    cy.findByText("Register").click();
})

When("I enter all the required user information", () => {
    cy.fixture("RegisterAccountTestData.json").as('userData').then((data) => {
        cy.get("#customer\\.firstName").type(data.firstName);
        cy.get("#customer\\.lastName").type(data.lastName);
        cy.get("#customer\\.address\\.street").type(data.address.street);
        cy.get("#customer\\.address\\.city").type(data.address.city);
        cy.get("#customer\\.address\\.state").type(data.address.state);
        cy.get("#customer\\.address\\.zipCode").type(data.address.zipcode);
        cy.get("#customer\\.phoneNumber").type(data.phoneNumber);
        cy.get("#customer\\.ssn").type(data.ssn);

        //login details
        var userName = `testpara${Math.floor(Math.random() * Math.floor(999999999))}`;
        cy.get("#customer\\.username").type(userName);
        cy.get("#customer\\.password").type(data.password);
        cy.get("#repeatedPassword").type(data.password);
    });
})

When("I click on register button", () => {
    cy.get("[value=Register]").click();
})

Then("I verify that user registered successfully", () => {
    cy.get("#rightPanel").should('contain.text', "Your account was created successfully. You are now logged in.");
})
