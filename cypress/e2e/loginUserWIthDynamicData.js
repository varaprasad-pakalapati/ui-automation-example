import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I create new user using api", () => {
    RegisterUser();
})

When("I enter login details", () => {
})

export function RegisterUser() {
    const apiUrl = ``;
    const registerUserRequest = {
        method: 'POST',
        url: apiUrl,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': ``
        },
        body: {
            firstName: "test",
            lastName: "user",
            userName: "",
            password: "",
        },
    }
    cy.request(registerUserRequest);
}

