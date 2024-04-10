Feature: Register User
    As AQA i want to test register user functionality is working as expected

    Scenario Outline: Register User
        Given I have para soft test website
        When I click on register link
        And I enter all the required user information
        And I click on register button
        Then I verify that user registered successfully
        